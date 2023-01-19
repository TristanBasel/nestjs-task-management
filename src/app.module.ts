import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as process from 'process';
import { configValidationSchema } from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`], // this STAGE, we add to package.json
      validationSchema: configValidationSchema,
    }),
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule,
        // TypeOrmModule.forRoot({
        //   type: 'postgres', // This one still works, but using the .env file doesn't
        //   host: 'localhost',
        //   port: 5432,
        //   username: 'postgres',
        //   password: 'postgres',
        //   database: 'task-management',
        //   autoLoadEntities: true, // define entities which get translated, we autoload these.
        //   synchronize: true, // always keeps the db schema in sync, an advanced feature.
        // }),
      ],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          autoLoadEntities: true, // define entities which get translated, we autoload these.
          synchronize: true, // always keeps the db schema in sync, an advanced feature.
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
        };
      },
    }),
    AuthModule,
  ],
})
export class AppModule {}
