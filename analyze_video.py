import cv2
import numpy as np

video_path = "public/character.mp4"
cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print(f"Error: Could not open {video_path}")
    exit(1)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
duration = total_frames / fps if fps > 0 else 0

print(f"Total frames: {total_frames}")
print(f"FPS: {fps}")
print(f"Resolution: {width}x{height}")
print(f"Duration: {duration:.2f}s")

# Sample background color from corners of the first frame and middle frame
ret, frame = cap.read()
if ret:
    # Corner samples (top-left, top-right, bottom-left, bottom-right)
    corners = [
        frame[10:30, 10:30],
        frame[10:30, width-30:width-10],
        frame[height-30:height-10, 10:30],
        frame[height-30:height-10, width-30:width-10],
    ]
    mean_bgr = np.mean([np.mean(c, axis=(0,1)) for c in corners], axis=0)
    mean_rgb = [int(round(mean_bgr[2])), int(round(mean_bgr[1])), int(round(mean_bgr[0]))]
    hex_color = f"#{mean_rgb[0]:02x}{mean_rgb[1]:02x}{mean_rgb[2]:02x}"
    print(f"Background RGB: {mean_rgb}, HEX: {hex_color}")

cap.release()
