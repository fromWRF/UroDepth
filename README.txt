TBME PROJECT WEBPAGE
====================

Files
-----
index.html
styles.css
script.js
assets/

How to preview
--------------
Option 1:
Double-click index.html.

Option 2, recommended:
Open a terminal in this folder and run:

python3 -m http.server 8000

Then open:
http://localhost:8000

Video file names currently expected
-----------------------------------
assets/teaser.mp4
assets/simulation_environment.mp4

assets/synthetic_rgb.mp4
assets/synthetic_depth.mp4
assets/synthetic_segmentation.mp4
assets/synthetic_optical_flow.mp4

assets/simple_texture.mp4
assets/model_1_simple_texture_guidewire.mp4
assets/realistic_texture_guidewire.mp4
assets/realistic_texture_camera_effects.mp4

assets/depth_rgb.mp4
assets/depth_ground_truth.mp4
assets/depth_prediction.mp4
assets/depth_ours.mp4
assets/depth_baseline_1.mp4
assets/depth_baseline_2.mp4
assets/temporal_ours.mp4
assets/temporal_baseline.mp4

assets/reconstruction_rgb.mp4
assets/reconstruction_depth.mp4
assets/reconstruction_3d.mp4
assets/reconstruction_gt.mp4
assets/reconstruction_pred.mp4

assets/localization_rgb.mp4
assets/localization_trajectory.mp4
assets/end_to_end_demo.mp4

Optional:
assets/teaser_poster.jpg

Recommended video encoding
--------------------------
For the web, MP4 with H.264 video is the safest choice.

Example ffmpeg conversion:
ffmpeg -i input.mp4 -c:v libx264 -crf 20 -preset medium -pix_fmt yuv420p -an output_web.mp4

If you need audio, remove "-an" and add:
-c:a aac -b:a 160k

First edits to make
-------------------
1. Replace the paper title.
2. Replace authors and affiliations.
3. Paste in your abstract.
4. Replace the Paper / Code / Dataset links.
5. Update captions and descriptions.
6. Copy your videos into assets/ using the filenames above,
   OR edit the corresponding src paths in index.html.
7. Replace the BibTeX entry.

Suggested deployment
--------------------
GitHub Pages is a very convenient option for an academic project page.
You can also use your university server or another static-web host.
