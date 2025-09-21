---
sidebar_label: 'PCAA'
sidebar_position: 2
---
# Power-Aware Collective Communication

## Energy-Efficient Large-Scale LLM Training

Large-scale machine learning training spans hundreds of GPUs, so communication efficiency has a direct impact on both performance and energy cost. This project investigates how different parallelism strategies—data, pipeline, and tensor—interact with network topologies to influence overall power usage, with the goal of improving the energy efficiency of large language model (LLM) training.

## Concrete Plan

- Set up Astra-sim to simulate training time and energy consumption for a chosen LLM.
- Compute the energy-delay product (EDP) across multiple LLM sizes and parallelism strategies.
- Update Astra-sim’s collective communication layer to minimize EDP.
- Run an ablation study on the key tunable parameters.

## References

- [Astra-sim](https://github.com/astra-sim/astra-sim)
- PCCL: *Energy-Efficient LLM Training with Power-Aware Collective Communication*
