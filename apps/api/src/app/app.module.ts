import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PostgresTypeOrmConfigService } from './database/services/postgres-type-orm-config.service';
import configuration from './config/configuration';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DatabaseModule,
    TodoModule,
  ],
  providers: [PostgresTypeOrmConfigService],
})
export class AppModule {}
