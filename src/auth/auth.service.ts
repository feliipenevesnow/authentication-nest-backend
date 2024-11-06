import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    emailForm: string,
    senhaForm: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usuarioService.findByEmail(emailForm);
    if (user?.senha !== senhaForm) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.primeiroNome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
