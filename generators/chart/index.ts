import Generator from 'yeoman-generator';

interface GeneratorOptions {
  name: string;
}

export default class ManifestGenerator extends Generator<GeneratorOptions> {
  constructor(args: any, opts: any) {
    super(args, opts);

    this.argument('name', { type: String, required: true });
  }

  public async create() {
    const { name } = this.options;
    const chartRoot = `charts/${name}`;

    this.fs.write(this.destinationPath(`${chartRoot}/charts/.gitkeep`), '');
    this.fs.write(this.destinationPath(`${chartRoot}/templates/.gitkeep`), '');

    this.fs.copyTpl(
      this.templatePath(`Chart.yaml`),
      this.destinationPath(`${chartRoot}/Chart.yaml`),
      { name },
    );

    this.fs.copyTpl(
      this.templatePath(`values.yaml`),
      this.destinationPath(`${chartRoot}/values.yaml`),
    );
  }
}
