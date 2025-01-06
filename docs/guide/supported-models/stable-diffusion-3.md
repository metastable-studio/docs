# Stable Diffusion 3.x

Stable Diffusion 3.x uses a split checkpoint (i.e. UNET/VAE/CLIP aren't contained in a single file), therefore it can only be used in the "Advanced" checkpoint mode.

## Manual installation

Due to licensing restrictions, Metastable is unable to provide a fully automatic installation procedure for SD 3.x. The models can still be installed manually.

1. If you don't have a HuggingFace account yet, create a new account here - https://huggingface.co/join
2. Log into your HuggingFace account.
3. Choose a model and navigate to:

   - SD 3 medium - https://huggingface.co/stabilityai/stable-diffusion-3-medium
   - SD 3.5 medium - https://huggingface.co/stabilityai/stable-diffusion-3.5-medium
   - SD 3.5 large turbo - https://huggingface.co/stabilityai/stable-diffusion-3.5-large-turbo
   - SD 3.5 large - https://huggingface.co/stabilityai/stable-diffusion-3.5-large

4. Fill in the "You need to agree to share your contact information to access this model" form, and submit. The access should be granted instantly.
5. Regardless of the model you've chosen, submit the same form for SD 3 medium as well - https://huggingface.co/stabilityai/stable-diffusion-3-medium
6. Download the following files:

   1. Model file (depending on the model you're trying to use):

      - SD 3 medium - https://huggingface.co/stabilityai/stable-diffusion-3-medium/resolve/main/sd3_medium.safetensors
      - SD 3.5 medium - https://huggingface.co/stabilityai/stable-diffusion-3.5-medium/resolve/main/sd3.5_medium.safetensors
      - SD 3.5 large turbo - https://huggingface.co/stabilityai/stable-diffusion-3.5-large-turbo/resolve/main/sd3.5_large_turbo.safetensors
      - SD 3.5 large - https://huggingface.co/stabilityai/stable-diffusion-3.5-large/resolve/main/sd3.5_large.safetensors

   2. Text encoders:
      - https://huggingface.co/stabilityai/stable-diffusion-3-medium/blob/main/text_encoders/clip_l.safetensors
      - https://huggingface.co/stabilityai/stable-diffusion-3-medium/blob/main/text_encoders/clip_g.safetensors
      - https://huggingface.co/stabilityai/stable-diffusion-3-medium/blob/main/text_encoders/t5xxl_fp16.safetensors

7. Open Metastable.
8. Go to "Settings", "About Metastable" and click on the "Reveal in explorer" button in the "Storage" section.
9. In the newly opened file explorer window, open the "models" directory.
10. Move your model file (sdX_X.safetensors) to the "checkpoint" directory.
11. Move your text encoder files (clip_l.safetensors, clip_g.safetensors, t5xxl_fp16.safetensors) to the "clip" directory.

## Supported features

| Feature        | SD 3.x |
| -------------- | ------ |
| Text-to-image  | ✅     |
| Image-to-image | ✅     |
| Inpainting     | ✅     |
| LORA           | ✅     |
| ControlNet     | ✅     |
| IPAdapter      | ❌     |
| PULID          | ❌     |
