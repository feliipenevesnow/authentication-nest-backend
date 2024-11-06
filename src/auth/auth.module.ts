import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthController } from './auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    UsuarioModule,

    //####EXEMPLO 1 - Usando o process.env
    ConfigModule.forRoot(), //É necessário para utilizar o process.env.SECRET
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '60s' },
    }),

    //####EXEMPLO 2 - Usando a classe ConfigService (sem o process.env)
    // JwtModule.registerAsync({
    //   imports:[ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     secret: configService.get("SECRET"),
    //     signOptions: { expiresIn: '60s' },
    //   }),
    //   inject: [ConfigService],
    //   global: true,
    // }),
  ],
  providers: [AuthService,{
    provide: APP_GUARD,
    useClass: AuthGuard,
  }],
  exports:[AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
  