import { Test, TestingModule } from '@nestjs/testing';
import { ClapsController } from './claps.controller';
import { ClapsService } from './claps.service';

describe('ClapsController', () => {
  let controller: ClapsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClapsController],
      providers: [ClapsService],
    }).compile();

    controller = module.get<ClapsController>(ClapsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
