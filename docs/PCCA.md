---
sidebar_label: 'PCAA'
sidebar_position: 50
---
# Power-Aware Collective Communication

## Contributors
- **Yuxuan Lin** · yl6061@columbia.edu  
- **Jiayu Zhou** · jz4019@columbia.edu  
- **Shufeng Chen** · sc5739@columbia.edu  
- **Boxiong Li** · bl3155@columbia.edu  


## Project Goal
Large Language Model (LLM) training at scale requires hundreds to thousands of GPUs.  
**Collective communication** (e.g., AllReduce) dominates both training **performance** and **energy cost**.  

Our project aims to **reduce communication energy overhead** through **power-aware communication**, focusing on **DVFS (Dynamic Voltage and Frequency Scaling)** during the communication phase — without sacrificing performance.

## Roadmap

| Stage | Task | Contribution|Status |
|-------|------|--------| -------|
| [Real trace collection](#real-training-framework) | PyTorch Profiler + Unsloth |Yuxuan Lin, Jiayu Zhou | ✅ Done |
| [Chakra ET generation](#simulation-framework)| For ASTRA-Sim input | Shufeng Chen, Boxiong Li | ✅ Done |
| ASTRA-Sim integration | Analytical backend |TBD| 🟡 In progress |
| Power modeling | DVFS-aware communication |TBD| 🔜 Planned |
| Evaluation | EDP + Samples/J | TBD|🔜 Planned |




## Real Training Framework
We use [**Unsloth**](https://github.com/unslothai/unsloth) for efficient LLM training and trace collection.

- **What we collect**
  - Compute events (e.g., `aten::matmul`)
  - Memory usage, shapes, and execution timeline

- **Why Unsloth**
  - Memory-efficient fine-tuning  
  - Easy profiling with PyTorch Profiler  
  - Works well on limited GPU resources (e.g., Colab T4)



## Simulation Framework
We simulate communication and power behavior with:
- [**ASTRA-Sim**](https://github.com/astra-sim): communication and system-level simulator  
- [**Symbolic Tensor Graph**](https://github.com/astra-sim/symbolic_tensor_graph): lightweight ET trace format for scalable simulations

- **Why Simulation**
    - Real hardware measurements are expensive and slow at scale.
    - Simulation allows rapid design-space exploration and power modeling.

- **Features we leverage**
    - Analytical backend support  
    - Multi-dimensional topology modeling  
    - Scheduling and overlap policy tuning  
    - Trace-driven energy/performance estimation

[ASTRA-Sim Docs](https://astra-sim.github.io/)


## Benchmark Reference — MLPerf Power
To guide evaluation, we align with the [**MLPerf Power**](https://ieeexplore.ieee.org/abstract/document/10946778) methodology.

<!-- \[
\text{Samples/Joule} =
\frac{\text{Throughput (Samples/s)}}{\text{Average Power (W)}}
= \frac{N}{t \times P_{\text{avg}}}
\] -->
<!-- <p align="center">
  <img src="https://latex.codecogs.com/svg.image?\Large \dpi{120} \text{Samples/Joule}=\frac{\text{Throughput (Samples/s)}}{\text{Average Power (W)}}=\frac{N}{t \times P_{\text{avg}}}" />
</p> -->





## References
- [PCCL: Power-Aware Collective Communication](https://ieeexplore.ieee.org/document/10818209)  
- [Unsloth](https://github.com/unslothai/unsloth)  
- [ASTRA-Sim](https://github.com/astra-sim)  
- [Symbolic Tensor Graph](https://github.com/astra-sim/symbolic_tensor_graph)