import { Test, TestingModule } from '@nestjs/testing';
import { ClapsService } from './claps.service';

describe('ClapsService', () => {
  let service: ClapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClapsService],
    }).compile();

    service = module.get<ClapsService>(ClapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
