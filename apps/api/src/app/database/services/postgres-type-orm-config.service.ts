import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { environment } from '../../../environments/environment';

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      entities: this.configService.get<string[]>('orm.entities'),
      synchronize: this.configService.get<boolean>('orm.synchronize'),
      migrationsTableName: this.configService.get<string>('orm.migrationsTableName'),
      migrations: this.configService.get<string[]>('orm.migrations'),
      cli: {
        migrationsDir: this.configService.get<string>('cli.migrationsDir'),
      },
      ssl: environment.production,
    };
  }
}
