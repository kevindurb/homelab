import { definitions } from './kubernetes_raw';

export type Pod = definitions['io.k8s.api.core.v1.Pod'];
export type Deployment = definitions['io.k8s.api.apps.v1.Deployment'];
export type Service = definitions['io.k8s.api.core.v1.Service'];
export type Ingress = definitions['io.k8s.api.networking.v1.Ingress'];
export type PersistentVolume =
  definitions['io.k8s.api.core.v1.PersistentVolume'];
export type PersistentVolumeClaim =
  definitions['io.k8s.api.core.v1.PersistentVolumeClaim'];
export type ConfigMap = definitions['io.k8s.api.core.v1.ConfigMap'];
export type Secret = definitions['io.k8s.api.core.v1.Secret'];
