import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { DoctorController } from './doctor/doctor.controller';
import { AppointmentsController } from './appointments/appointments.controller';
import { AppointmentsService } from './appointments/appointments.service';
import { DoctorService } from './doctor/doctor.service';
import { DoctorModule } from './doctor/doctor.module';
import { UserModule } from './user/user.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';
import {BullModule} from "@nestjs/bull";
const configService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('POSTGRES_HOST'),
      port: configService.get('POSTGRES_PORT'),
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DB'),
      migrations: [],
      synchronize: false,
      autoLoadEntities: true,
    }),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    DoctorModule,
    UserModule,
    AppointmentsModule,
    AuthModule,
    NotificationModule],
})
export class AppModule {}

