import * as k8s from '../types/kubernetes';
import { Entity } from './Entity';

export class Deployment extends Entity<k8s.Deployment> {}
