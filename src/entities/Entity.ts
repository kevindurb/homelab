interface BaseManifestType {
  metadata?: {
    name?: string;
    labels?: Record<string, string>;
  };
}

export abstract class Entity<ManifestType extends BaseManifestType> {
  protected manifest: ManifestType;

  constructor(manifest: ManifestType) {
    this.manifest = manifest;
  }

  public get name() {
    return this.manifest.metadata?.name ?? '';
  }

  public get labels() {
    return this.manifest.metadata?.labels ?? {};
  }
}
