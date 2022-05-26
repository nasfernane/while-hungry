import { Injectable } from '@nestjs/common';
import { prisma } from '@wh/prisma-client';
import * as bcrypt from 'bcrypt';
import { Jwt } from './../../../../utils/jwt';
import * as jwt from 'jsonwebtoken';

import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './../../../../filters/http-exception.filter';


@Injectable()
@UseFilters(new HttpExceptionFilter())
export class LoginGoogleService {
  async login(param) {
    const email = await Jwt.verifyGoogleTOken(param.googleToken);

    if (email && typeof(email) === 'string') {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      //  if user not found
      if (!user) {
        const nickname = this.randomNickname();
        const password = this.randomPassword();
        
        const user = await prisma.user.create({
          data: { email, nickname, password, avatar: 'avatar9' },
        });
  
        const accessToken = await Jwt.signAccessToken(user);
  
        return { ...user, accessToken };
      } 

      const accessToken = await Jwt.signAccessToken(user);

      return { ...user, accessToken };
    }
  }

  randomNickname() {
    const prefixes = ['adorable', 'adventurous', 'aggressive', 'agreable', 'alert', 'alive', 'amused', 'angry', 'annoyed', 'anxious','arrogant','ashamed','attractive','average','awful','bad','beautiful','better', 'bewildered', 'black',
    'bloody', 'blue', 'blushing', 'bored', 'brainy','brave', 'breakable', 'bright', 'busy', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'cloudy', 'clumsy', 'colorful', 'combative', 'comfortable', 'concerned', 'condemned', 'confused', 'cooperative', 'courageous', 'crazy', 'creepy','crowded','cruel','curious','cute', 'dangerous', 'dark', 'dead', 'defeated', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'difficult', 'disgusted', 'distinct', 'disturbed', 'dizzy', 'doubtful', 'drab', 'dulleager', 'easy', 'elated', 'elegant', 'embarrassed', 'enchanting', 'encouraging', 'energetic', 'enthusiastic', 'envious', 'evil', 'excited', 'expensive', 'exuberant', 'fair', 'faithful', 'famous', 'fancy', 'fantastic', 'fierce', 'filthy', 'fine', 'foolish', 'fragile', 'frail', 'frantic', 'friendly', 'frightened', 'funny', 'gentle', 'gifted', 'glamorous', 'gleaming', 'glorious', 'good', 'gorgeous', 'graceful', 'grieving', 'grotesque', 'grumpy', 'handsome', 'happy', 'healthy', 'helpful', 'helpless', 'hilarious', 'homeless', 'homely', 'horrible', 'hungry', 'hurt', 'ill', 'important', 'impossible', 'inexpensive', 'innocent', 'inquisitive', 'itchy', 'jealous', 'jittery', 'jolly', 'joyous', 'kind', 'lazy', 'light', 'lively', 'lonely', 'long', 'lovely', 'lucky', 'magnificent', 'misty', 'modern', 'motionless', 'muddy', 'mushy', 'mysterious', 'nasty', 'naughty', 'nervous', 'nice', 'nutty', 'obedient', 'obnoxious', 'odd', 'old-fashioned', 'open', 'outrageous', 'outstanding', 'panicky', 'perfect', 'plain', 'pleasant', 'poised', 'poor', 'powerful', 'precious', 'prickly', 'proud', 'putrid', 'puzzled', 'quaint', 'real', 'relieved', 'repulsive', 'rich', 'scary', 'selfish', 'shiny', 'shy', 'silly', 'sleepy', 'smiling', 'smoggy', 'sore', 'sparkling', 'splendid', 'spotless', 'stormy', 'strange', 'stupid', 'successful', 'super', 'talented','tame', 'tasty', 'tender', 'tense', 'terrible', 'thankful', 'thoughtful', 'thoughtless', 'tired', 'tough', 'troubled', 'ugliest', 'ugly', 'uninterested', 'unsightly', 'unusual', 'upset', 'uptight', 'vast', 'victorious', 'vivacious', 'wandering', 'weary', 'wicked', 'wild', 'witty', 'worried', 'worrisome', 'wrong', 'zany', 'zealous'];

    const suffixes = ['Cow', 'Rabbit', 'Ducks', 'Shrimp', 'Pig', 'Goat', 'Crab', 'Deer', 'Bee', 'Sheep', 'Fish', 'Turkey', 'Dove', 'Chicken', 'Horse', 'Crow', 'Peacock', 'Dove', 'Sparrow', 'Goose', 'Stork', 'Pigeon', 'Turkey', 'Hawk', 'Eagle', 'Raven', 'Parrot', 'Flamingo', 'Seagull', 'Ostrich', 'Swallow', 'Penguin', 'Robin', 'Swan', 'Owl', 'Woodpecker', 'Squirrel', 'Dog', 'Chimpanzee', 'Ox', 'Lion', 'Panda', 'Walrus', 'Otter', 'Mouse', 'Kangaroo', 'Goat', 'Horse', 'Monkey', 'Cow', 'Koala', 'Mole', 'Elephant', 'Leopard', 'Hippopotamus', 'Giraffe', 'Fox', 'Coyote', 'Hedgehong', 'Sheep', 'Deer',
    'Camel', 'Starfish', 'Koala', 'Alligator', 'Owl', 'Tiger', 'Bear', 'Whale', 'Coyote', 'Chimpanzee', 'Raccoon', 'Lion', 'Wolf', 'Crocodile', 'Dolphin', 'Squirrel', 'Snake', 'Kangaroo', 'Hippopotamus', 'Elk', 'Fox', 'Gorilla', 'Bat', 'Hare', 'Toad', 'Frog', 'Deer', 'Rat', 'Badger', 'Lizard', 'Mole', 'Hedgehog', 'Otter', 'Reindeer', 'Vicuna'];

    const randomPrefixeIndex = Math.floor(Math.random() * (prefixes.length - 1 + 1) + 1)
    const randomPrefix = prefixes[randomPrefixeIndex]
    const randomSuffixeIndex = Math.floor(Math.random() * (suffixes.length - 1 + 1) + 1)
    const randomSuffixe = suffixes[randomSuffixeIndex]

    const nickname = randomPrefix.charAt(0).toUpperCase() + randomPrefix.slice(1) + randomSuffixe + Math.floor(Math.random() * (1337 - 1 + 1) + 1);

    return nickname;
   
  }

  randomPassword() {
    const password = Math.random().toString(36).slice(-7);
    return  bcrypt.hashSync(password, 8);
  }
}
