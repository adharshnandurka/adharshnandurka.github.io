import cv2
import os
import json
import numpy as np

os.makedirs("public/frames", exist_ok=True)

video_path = "public/character.mp4"
cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

print(f"Video info: {total_frames} frames, {fps} FPS, {width}x{height}")

# Read all frames into memory
frames = []
for i in range(total_frames):
    ret, frame = cap.read()
    if not ret:
        break
    frames.append(frame)
cap.release()

print(f"Loaded {len(frames)} frames into memory.")

compass_data = {
    "CENTER": 27,
    "RIGHT": 103,
    "DOWN_RIGHT": 132,
    "DOWN": 159,
    "DOWN_LEFT": 190,
    "LEFT": 223,
    "UP_LEFT": 256,
    "UP": 50,
    "UP_RIGHT": 76
}

# Sector definitions: (start_index, end_index, start_frame, end_frame)
sectors = [
    (0, 8, 103, 132),       # RIGHT -> DOWN-RIGHT
    (8, 16, 132, 159),      # DOWN-RIGHT -> DOWN
    (16, 24, 159, 190),     # DOWN -> DOWN-LEFT
    (24, 32, 190, 223),     # DOWN-LEFT -> LEFT
    (32, 40, 223, 256),     # LEFT -> UP-LEFT
    (40, 48, 256, 270),     # UP-LEFT -> UP (using video frames 256..270, then connecting to 50)
    (48, 56, 50, 76),       # UP -> UP-RIGHT
    (56, 64, 76, 103)       # UP-RIGHT -> RIGHT
]

frame_indices = {}

for start_idx, end_idx, start_frame, end_frame in sectors:
    n_steps = end_idx - start_idx
    for step in range(n_steps):
        curr_idx = start_idx + step
        t = step / float(n_steps)
        if start_idx == 40:
            # Special case for UP-LEFT to UP: video frames 256 to 270
            f_num = int(round(256 + t * (270 - 256)))
            if step == 7:
                f_num = 50 # final transition directly into UP
        else:
            f_num = int(round(start_frame + t * (end_frame - start_frame)))
        frame_indices[curr_idx] = f_num

print("Mapped 64 frame indices:")
for i in range(64):
    print(f"Index {i:02d} -> Video Frame {frame_indices[i]:03d}")

# Save center neutral frame
center_frame = frames[compass_data["CENTER"]]
cv2.imwrite("public/frames/center.webp", center_frame, [cv2.IMWRITE_WEBP_QUALITY, 92])
cv2.imwrite("public/center.webp", center_frame, [cv2.IMWRITE_WEBP_QUALITY, 92])
print("Saved public/frames/center.webp and public/center.webp")

# Save 64 WebP frames
bg_colors = []
for i in range(64):
    f_num = frame_indices[i]
    frame = frames[f_num]
    out_path = f"public/frames/frame_{i:02d}.webp"
    cv2.imwrite(out_path, frame, [cv2.IMWRITE_WEBP_QUALITY, 92])
    
    # Sample corner background
    tl = frame[10:30, 10:30]
    mean_bgr = np.mean(tl, axis=(0,1))
    bg_colors.append(mean_bgr)

avg_bgr = np.mean(bg_colors, axis=0)
avg_rgb = [int(round(avg_bgr[2])), int(round(avg_bgr[1])), int(round(avg_bgr[0]))]
avg_hex = f"#{avg_rgb[0]:02x}{avg_rgb[1]:02x}{avg_rgb[2]:02x}"

print(f"\nSuccessfully extracted all 64 frames!")
print(f"Average background color: RGB({avg_rgb[0]}, {avg_rgb[1]}, {avg_rgb[2]}), HEX: {avg_hex}")

metadata = {
    "totalFrames": 64,
    "angleStepDeg": 360.0 / 64.0,
    "backgroundColor": avg_hex,
    "backgroundRgb": avg_rgb,
    "centerFrame": compass_data["CENTER"],
    "compassKeyframes": compass_data,
    "frameMappings": frame_indices
}

with open("public/frames/metadata.json", "w") as f:
    json.dump(metadata, f, indent=2)

print("Saved public/frames/metadata.json")
