# Platform-specific Instructions

## AMD GPUs on Windows via ZLUDA

1. Confirm your GPU is supported: https://rocm.docs.amd.com/projects/install-on-windows/en/latest/reference/system-requirements.html
2. In some cases, unofficial support for unsupported GPUs is available.
   - RX 6600/6700: https://github.com/brknsoul/ROCmLibs
   - 780M: https://github.com/likelovewant/ROCmLibs-for-gfx1103-AMD780M-APU
3. Download and install HIP SDK 5.7 or 6.1:
   - HIP SDK 5.7 - https://www.amd.com/en/developer/resources/rocm-hub/eula/licenses.html?filename=AMD-Software-PRO-Edition-23.Q4-Win10-Win11-For-HIP.exe
   - HIP SDK 6.1 - https://www.amd.com/en/developer/resources/rocm-hub/eula/licenses.html?filename=AMD-Software-PRO-Edition-24.Q3-Win10-Win11-For-HIP.exe
