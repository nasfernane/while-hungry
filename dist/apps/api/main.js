/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
};
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// check auth token middleware
const checkAuth_1 = __webpack_require__("./apps/api/src/middlewares/checkAuth.ts");
// modules
const recipes_module_1 = __webpack_require__("./apps/api/src/modules/recipes/recipes.module.ts");
const posts_module_1 = __webpack_require__("./apps/api/src/modules/posts/posts.module.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/modules/auth/auth.module.ts");
const claps_module_1 = __webpack_require__("./apps/api/src/modules/claps/claps.module.ts");
const reviews_module_1 = __webpack_require__("./apps/api/src/modules/reviews/reviews.module.ts");
const recipes_comments_module_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/recipes-comments.module.ts");
const users_module_1 = __webpack_require__("./apps/api/src/modules/users/users.module.ts");
const definitions_module_1 = __webpack_require__("./apps/api/src/modules/definitions/definitions.module.ts");
const favorites_module_1 = __webpack_require__("./apps/api/src/modules/favorites/favorites.module.ts");
const shopping_list_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/shopping-list.module.ts");
const files_module_1 = __webpack_require__("./apps/api/src/modules/files/files.module.ts");
const recipes_tags_module_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/recipes-tags.module.ts");
const contact_module_1 = __webpack_require__("./apps/api/src/modules/contact/contact.module.ts");
// app controller & service
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
// trottler (rate limiter)
const core_1 = __webpack_require__("@nestjs/core");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(checkAuth_1.CheckAuthMiddleware)
            .forRoutes('users', 'favorites', 'shopping-list', { path: 'recipes', method: common_1.RequestMethod.POST }, { path: 'recipes/:id', method: common_1.RequestMethod.DELETE }, { path: 'recipes/:id', method: common_1.RequestMethod.PATCH }, { path: 'recipes-comments', method: common_1.RequestMethod.POST }, { path: 'recipes/picture', method: common_1.RequestMethod.POST }, { path: 'reviews', method: common_1.RequestMethod.POST }, { path: 'reviews:id', method: common_1.RequestMethod.PATCH }, { path: 'claps', method: common_1.RequestMethod.POST }, { path: 'claps/check', method: common_1.RequestMethod.POST });
    }
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot({
                ttl: 10,
                limit: 5000,
            }),
            recipes_module_1.RecipesModule,
            posts_module_1.PostsModule,
            auth_module_1.AuthModule,
            claps_module_1.ClapsModule,
            reviews_module_1.ReviewsModule,
            recipes_comments_module_1.RecipesCommentsModule,
            users_module_1.UsersModule,
            definitions_module_1.DefinitionsModule,
            favorites_module_1.FavoritesModule,
            shopping_list_module_1.ShoppingListModule,
            files_module_1.FilesModule,
            recipes_tags_module_1.RecipesTagsModule,
            contact_module_1.ContactModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard }],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/filters/http-exception.filter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
HttpExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),

/***/ "./apps/api/src/middlewares/checkAuth.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckAuthMiddleware = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const common_2 = __webpack_require__("@nestjs/common");
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
let CheckAuthMiddleware = class CheckAuthMiddleware {
    use(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization
                ? req.headers.authorization.split(' ')[1]
                : null;
            const decoded = token
                ? jwt.verify(token, process.env['ACCESS_TOKEN_SECRET'])
                : null;
            if (!token || !decoded) {
                throw new common_2.HttpException('Unauthorized', common_2.HttpStatus.UNAUTHORIZED);
            }
            next();
        });
    }
};
CheckAuthMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CheckAuthMiddleware);
exports.CheckAuthMiddleware = CheckAuthMiddleware;


/***/ }),

/***/ "./apps/api/src/modules/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const register_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.module.ts");
const login_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.module.ts");
const updatePassword_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.module.ts");
const loginGoogle_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.module.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [register_module_1.RegisterModule, login_module_1.LoginModule, updatePassword_module_1.UpdatePasswordModule, loginGoogle_module_1.LoginGoogleModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginGoogleController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const loginGoogle_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let LoginGoogleController = class LoginGoogleController {
    constructor(service) {
        this.service = service;
    }
    login(Param) {
        return this.service.login(Param);
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully logged.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/loginGoogle'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LoginGoogleController.prototype, "login", null);
LoginGoogleController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof loginGoogle_service_1.LoginGoogleService !== "undefined" && loginGoogle_service_1.LoginGoogleService) === "function" ? _a : Object])
], LoginGoogleController);
exports.LoginGoogleController = LoginGoogleController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginGoogleModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const loginGoogle_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.service.ts");
const loginGoogle_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.controller.ts");
let LoginGoogleModule = class LoginGoogleModule {
};
LoginGoogleModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [loginGoogle_controller_1.LoginGoogleController],
        providers: [loginGoogle_service_1.LoginGoogleService],
    })
], LoginGoogleModule);
exports.LoginGoogleModule = LoginGoogleModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginGoogleService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let LoginGoogleService = class LoginGoogleService {
    login(param) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const email = yield jwt_1.Jwt.verifyGoogleTOken(param.googleToken);
            if (email && typeof (email) === 'string') {
                const user = yield prisma_client_1.prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                //  if user not found
                if (!user) {
                    const nickname = this.randomNickname();
                    const password = this.randomPassword();
                    const user = yield prisma_client_1.prisma.user.create({
                        data: { email, nickname, password, avatar: 'avatar9' },
                    });
                    const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                    return Object.assign(Object.assign({}, user), { accessToken });
                }
                const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                return Object.assign(Object.assign({}, user), { accessToken });
            }
        });
    }
    randomNickname() {
        const prefixes = ['adorable', 'adventurous', 'aggressive', 'agreable', 'alert', 'alive', 'amused', 'angry', 'annoyed', 'anxious', 'arrogant', 'ashamed', 'attractive', 'average', 'awful', 'bad', 'beautiful', 'better', 'bewildered', 'black',
            'bloody', 'blue', 'blushing', 'bored', 'brainy', 'brave', 'breakable', 'bright', 'busy', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'cloudy', 'clumsy', 'colorful', 'combative', 'comfortable', 'concerned', 'condemned', 'confused', 'cooperative', 'courageous', 'crazy', 'creepy', 'crowded', 'cruel', 'curious', 'cute', 'dangerous', 'dark', 'dead', 'defeated', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'difficult', 'disgusted', 'distinct', 'disturbed', 'dizzy', 'doubtful', 'drab', 'dulleager', 'easy', 'elated', 'elegant', 'embarrassed', 'enchanting', 'encouraging', 'energetic', 'enthusiastic', 'envious', 'evil', 'excited', 'expensive', 'exuberant', 'fair', 'faithful', 'famous', 'fancy', 'fantastic', 'fierce', 'filthy', 'fine', 'foolish', 'fragile', 'frail', 'frantic', 'friendly', 'frightened', 'funny', 'gentle', 'gifted', 'glamorous', 'gleaming', 'glorious', 'good', 'gorgeous', 'graceful', 'grieving', 'grotesque', 'grumpy', 'handsome', 'happy', 'healthy', 'helpful', 'helpless', 'hilarious', 'homeless', 'homely', 'horrible', 'hungry', 'hurt', 'ill', 'important', 'impossible', 'inexpensive', 'innocent', 'inquisitive', 'itchy', 'jealous', 'jittery', 'jolly', 'joyous', 'kind', 'lazy', 'light', 'lively', 'lonely', 'long', 'lovely', 'lucky', 'magnificent', 'misty', 'modern', 'motionless', 'muddy', 'mushy', 'mysterious', 'nasty', 'naughty', 'nervous', 'nice', 'nutty', 'obedient', 'obnoxious', 'odd', 'old-fashioned', 'open', 'outrageous', 'outstanding', 'panicky', 'perfect', 'plain', 'pleasant', 'poised', 'poor', 'powerful', 'precious', 'prickly', 'proud', 'putrid', 'puzzled', 'quaint', 'real', 'relieved', 'repulsive', 'rich', 'scary', 'selfish', 'shiny', 'shy', 'silly', 'sleepy', 'smiling', 'smoggy', 'sore', 'sparkling', 'splendid', 'spotless', 'stormy', 'strange', 'stupid', 'successful', 'super', 'talented', 'tame', 'tasty', 'tender', 'tense', 'terrible', 'thankful', 'thoughtful', 'thoughtless', 'tired', 'tough', 'troubled', 'ugliest', 'ugly', 'uninterested', 'unsightly', 'unusual', 'upset', 'uptight', 'vast', 'victorious', 'vivacious', 'wandering', 'weary', 'wicked', 'wild', 'witty', 'worried', 'worrisome', 'wrong', 'zany', 'zealous'];
        const suffixes = ['Cow', 'Rabbit', 'Ducks', 'Shrimp', 'Pig', 'Goat', 'Crab', 'Deer', 'Bee', 'Sheep', 'Fish', 'Turkey', 'Dove', 'Chicken', 'Horse', 'Crow', 'Peacock', 'Dove', 'Sparrow', 'Goose', 'Stork', 'Pigeon', 'Turkey', 'Hawk', 'Eagle', 'Raven', 'Parrot', 'Flamingo', 'Seagull', 'Ostrich', 'Swallow', 'Penguin', 'Robin', 'Swan', 'Owl', 'Woodpecker', 'Squirrel', 'Dog', 'Chimpanzee', 'Ox', 'Lion', 'Panda', 'Walrus', 'Otter', 'Mouse', 'Kangaroo', 'Goat', 'Horse', 'Monkey', 'Cow', 'Koala', 'Mole', 'Elephant', 'Leopard', 'Hippopotamus', 'Giraffe', 'Fox', 'Coyote', 'Hedgehog', 'Sheep', 'Deer',
            'Camel', 'Starfish', 'Koala', 'Alligator', 'Owl', 'Tiger', 'Bear', 'Whale', 'Coyote', 'Chimpanzee', 'Raccoon', 'Lion', 'Wolf', 'Crocodile', 'Dolphin', 'Squirrel', 'Snake', 'Kangaroo', 'Hippopotamus', 'Elk', 'Fox', 'Gorilla', 'Bat', 'Hare', 'Toad', 'Frog', 'Deer', 'Rat', 'Badger', 'Lizard', 'Mole', 'Hedgehog', 'Otter', 'Reindeer', 'Vicuna'];
        const randomPrefixeIndex = Math.floor(Math.random() * (prefixes.length - 1 + 1) + 1);
        const randomPrefix = prefixes[randomPrefixeIndex];
        const randomSuffixeIndex = Math.floor(Math.random() * (suffixes.length - 1 + 1) + 1);
        const randomSuffixe = suffixes[randomSuffixeIndex];
        const nickname = randomPrefix.charAt(0).toUpperCase() + randomPrefix.slice(1) + randomSuffixe + Math.floor(Math.random() * (1337 - 1 + 1) + 1);
        return nickname;
    }
    randomPassword() {
        const password = Math.random().toString(36).slice(-7);
        return bcrypt.hashSync(password, 8);
    }
};
LoginGoogleService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], LoginGoogleService);
exports.LoginGoogleService = LoginGoogleService;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/login/login.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const login_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let LoginController = class LoginController {
    constructor(service) {
        this.service = service;
    }
    login(Param) {
        return this.service.login(Param);
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully logged.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LoginController.prototype, "login", null);
LoginController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" ? _a : Object])
], LoginController);
exports.LoginController = LoginController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/login/login.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const login_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.service.ts");
const login_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.controller.ts");
let LoginModule = class LoginModule {
};
LoginModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService],
    })
], LoginModule);
exports.LoginModule = LoginModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/login/login.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let LoginService = class LoginService {
    login(param) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, password } = param;
            const user = yield prisma_client_1.prisma.user.findUnique({
                where: {
                    email,
                },
            });
            // if user not found or wrontg credentials
            if (!user || !bcrypt.compareSync(password, user.password)) {
                return { status: 404, message: 'Bad credentials' };
            }
            delete user.password;
            const accessToken = yield jwt_1.Jwt.signAccessToken(user);
            return Object.assign(Object.assign({}, user), { accessToken });
        });
    }
};
LoginService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/register/register.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const register_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let RegisterController = class RegisterController {
    constructor(service) {
        this.service = service;
    }
    register(Param) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.register(Param);
        });
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RegisterController.prototype, "register", null);
RegisterController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" ? _a : Object])
], RegisterController);
exports.RegisterController = RegisterController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/register/register.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const register_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.service.ts");
const register_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.controller.ts");
let RegisterModule = class RegisterModule {
};
RegisterModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [register_controller_1.RegisterController],
        providers: [register_service_1.RegisterService],
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/register/register.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const http_errors_1 = tslib_1.__importDefault(__webpack_require__("http-errors"));
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let RegisterService = class RegisterService {
    /**
     * registers users
     * @param param
     * @returns created user
     */
    register(param) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, nickname, passwordConfirm } = param;
            let { password } = param;
            if (password === passwordConfirm) {
                password = bcrypt.hashSync(password, 8);
                // create new user with a default avatar
                const user = yield prisma_client_1.prisma.user.create({
                    data: { email, nickname, password, avatar: 'avatar9' },
                });
                const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                return Object.assign(Object.assign({}, user), { accessToken });
            }
            else {
                throw new http_errors_1.default.NotFound('Password and confirmation are not identical');
            }
        });
    }
};
RegisterService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], RegisterService);
exports.RegisterService = RegisterService;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updatePassword_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let UpdatePasswordController = class UpdatePasswordController {
    constructor(service) {
        this.service = service;
    }
    updatePassword(id, passwords) {
        return this.service.updatePassword(+id, passwords);
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The password has been successfully updated.',
    }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/pwupdate/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UpdatePasswordController.prototype, "updatePassword", null);
UpdatePasswordController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof updatePassword_service_1.UpdatePasswordService !== "undefined" && updatePassword_service_1.UpdatePasswordService) === "function" ? _a : Object])
], UpdatePasswordController);
exports.UpdatePasswordController = UpdatePasswordController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updatePassword_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.service.ts");
const updatePassword_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.controller.ts");
let UpdatePasswordModule = class UpdatePasswordModule {
};
UpdatePasswordModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [updatePassword_controller_1.UpdatePasswordController],
        providers: [updatePassword_service_1.UpdatePasswordService],
    })
], UpdatePasswordModule);
exports.UpdatePasswordModule = UpdatePasswordModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let UpdatePasswordService = class UpdatePasswordService {
    updatePassword(id, passwords) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { oldPassword, password } = passwords;
            const user = yield prisma_client_1.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            // if user not found or wrontg credentials
            if (!user || !bcrypt.compareSync(oldPassword, user.password)) {
                return { status: 404, message: 'Bad credentials' };
            }
            else {
                const updatedUser = yield prisma_client_1.prisma.user.update({
                    where: {
                        id: id,
                    },
                    data: {
                        // hash new password
                        password: bcrypt.hashSync(password, 8),
                    },
                });
                const accessToken = yield jwt_1.Jwt.signAccessToken(updatedUser);
                return Object.assign(Object.assign({}, updatedUser), { accessToken });
            }
        });
    }
};
UpdatePasswordService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], UpdatePasswordService);
exports.UpdatePasswordService = UpdatePasswordService;


/***/ }),

/***/ "./apps/api/src/modules/claps/claps.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClapsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const check_module_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.module.ts");
const count_module_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.module.ts");
let ClapsModule = class ClapsModule {
};
ClapsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [check_module_1.CheckModule, create_module_1.CreateModule, count_module_1.CountModule],
    })
], ClapsModule);
exports.ClapsModule = ClapsModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/check/check.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckController = void 0;
const tslib_1 = __webpack_require__("tslib");
// nest libs & utils
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
//service
const check_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.service.ts");
// schema
const client_1 = __webpack_require__("@prisma/client");
let CheckController = class CheckController {
    constructor(service) {
        this.service = service;
    }
    /**
     * check if user already clapped the author
     * @param clap
     * @returns a boolean
     */
    check(clap) {
        return this.service.check(clap);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('/check'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.Clap !== "undefined" && client_1.Clap) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CheckController.prototype, "check", null);
CheckController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Claps'),
    (0, common_1.Controller)('claps'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof check_service_1.CheckService !== "undefined" && check_service_1.CheckService) === "function" ? _b : Object])
], CheckController);
exports.CheckController = CheckController;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/check/check.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const check_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.service.ts");
const check_controller_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.controller.ts");
let CheckModule = class CheckModule {
};
CheckModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [check_controller_1.CheckController],
        providers: [check_service_1.CheckService],
    })
], CheckModule);
exports.CheckModule = CheckModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/check/check.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CheckService = class CheckService {
    /**
     * check if user already clapped the author
     * @param clap
     * @returns a boolean
     */
    check(clap) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const clapExists = yield prisma_client_1.prisma.clap.findFirst({
                where: {
                    clapperId: +clap.clapperId,
                    clappedId: +clap.clappedId,
                },
            });
            if (clapExists) {
                return true;
            }
            else {
                false;
            }
        });
    }
};
CheckService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CheckService);
exports.CheckService = CheckService;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.service.ts");
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';
const client_1 = __webpack_require__("@prisma/client");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(clap) {
        return this.service.create(clap);
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The clap has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.Clap !== "undefined" && client_1.Clap) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Claps'),
    (0, common_1.Controller)('claps'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(clap) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newClap = yield prisma_client_1.prisma.clap.create({
                data: {
                    clapperId: +clap.clapperId,
                    clappedId: +clap.clappedId,
                },
            });
            return newClap;
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/getUserCount/count.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const count_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.service.ts");
let CountController = class CountController {
    constructor(service) {
        this.service = service;
    }
    /**
     * get claps count of user
     * @param id
     * @returns number
     */
    count(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.count(id);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/count/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CountController.prototype, "count", null);
CountController = tslib_1.__decorate([
    (0, common_1.Controller)('claps'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof count_service_1.CountService !== "undefined" && count_service_1.CountService) === "function" ? _a : Object])
], CountController);
exports.CountController = CountController;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/getUserCount/count.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const count_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.service.ts");
const count_controller_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.controller.ts");
let CountModule = class CountModule {
};
CountModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [count_controller_1.CountController],
        providers: [count_service_1.CountService],
    })
], CountModule);
exports.CountModule = CountModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/getUserCount/count.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CountService = class CountService {
    /**
     * gets claps count of user
     * @param id
     * @returns number
     */
    count(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const count = yield prisma_client_1.prisma.clap.count({
                where: {
                    clappedId: +id,
                },
            });
            return count;
        });
    }
};
CountService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CountService);
exports.CountService = CountService;


/***/ }),

/***/ "./apps/api/src/modules/contact/contact.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const sendMessage_module_1 = __webpack_require__("./apps/api/src/modules/contact/useCases/sendMessage/sendMessage.module.ts");
let ContactModule = class ContactModule {
};
ContactModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            sendMessage_module_1.SendMessageModule
        ],
    })
], ContactModule);
exports.ContactModule = ContactModule;


/***/ }),

/***/ "./apps/api/src/modules/contact/interfaces/contactBody.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/api/src/modules/contact/useCases/sendMessage/sendMessage.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMessageController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const sendMessage_service_1 = __webpack_require__("./apps/api/src/modules/contact/useCases/sendMessage/sendMessage.service.ts");
const contactBody_1 = __webpack_require__("./apps/api/src/modules/contact/interfaces/contactBody.ts");
let SendMessageController = class SendMessageController {
    constructor(service) {
        this.service = service;
    }
    getAuthorCount(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.sendMessage(body);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof contactBody_1.ContactBody !== "undefined" && contactBody_1.ContactBody) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SendMessageController.prototype, "getAuthorCount", null);
SendMessageController = tslib_1.__decorate([
    (0, common_1.Controller)('contact'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof sendMessage_service_1.SendMessageService !== "undefined" && sendMessage_service_1.SendMessageService) === "function" ? _b : Object])
], SendMessageController);
exports.SendMessageController = SendMessageController;


/***/ }),

/***/ "./apps/api/src/modules/contact/useCases/sendMessage/sendMessage.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMessageModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const sendMessage_service_1 = __webpack_require__("./apps/api/src/modules/contact/useCases/sendMessage/sendMessage.service.ts");
const sendMessage_controller_1 = __webpack_require__("./apps/api/src/modules/contact/useCases/sendMessage/sendMessage.controller.ts");
let SendMessageModule = class SendMessageModule {
};
SendMessageModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [sendMessage_controller_1.SendMessageController],
        providers: [sendMessage_service_1.SendMessageService],
    })
], SendMessageModule);
exports.SendMessageModule = SendMessageModule;


/***/ }),

/***/ "./apps/api/src/modules/contact/useCases/sendMessage/sendMessage.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMessageService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nodemailer = tslib_1.__importStar(__webpack_require__("nodemailer"));
let SendMessageService = class SendMessageService {
    sendMessage(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const { nickname, email, subject, message } = body;
                const transporter = nodemailer.createTransport({
                    host: 'ssl0.ovh.net',
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env['OVH_EMAIL_AUTH_USER'],
                        pass: process.env['OVH_EMAIL_AUTH_PW']
                    }
                });
                const mailOptions = {
                    from: `"<While Hungry>", "<${email}>"`,
                    to: `<contact@whilehungry.com>`,
                    subject: `<${subject}>`,
                    html: `<h2>
            Message de l'utilisateur ${nickname} (${email})
          </h2>
          <p style="font-size: 20px;">${message}</p>
          `
                };
                transporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        console.log("error while sending email : " + err);
                        resolve(false);
                    }
                    else {
                        resolve(true);
                    }
                });
            });
        });
    }
};
SendMessageService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], SendMessageService);
exports.SendMessageService = SendMessageService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/definitions.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefinitionsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const create_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.module.ts");
const find_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.module.ts");
let DefinitionsModule = class DefinitionsModule {
};
DefinitionsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            delete_module_1.DeleteModule,
            find_module_1.FindModule,
            findAll_module_1.FindAllModule,
            update_module_1.UpdateModule,
        ],
    })
], DefinitionsModule);
exports.DefinitionsModule = DefinitionsModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.service.ts");
// schema
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * Create a new definition
     * @param definition
     * @returns definition
     */
    create(definition) {
        return this.service.create(definition);
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.Definition !== "undefined" && client_1.Definition) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(definition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newDefinition = yield prisma_client_1.prisma.definition.create({
                data: Object.assign({}, definition),
            });
            return newDefinition;
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    /**
     * delete a definition based on id
     * @param id
     * @returns
     */
    remove(id) {
        return this.service.delete(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], DeleteController.prototype, "remove", null);
DeleteController = tslib_1.__decorate([
    (0, common_1.Controller)('Delete'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield prisma_client_1.prisma.definition.delete({
                where: {
                    id,
                },
            });
        });
    }
};
DeleteService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.service.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * gets all definitions ordered by labels alphabetical order
     * @returns an array of definitions
     */
    findAll() {
        return this.service.findAll();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * gets all definitions ordered by labels alphabetical order
     * @returns an array of definitions
     */
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const definitions = yield prisma_client_1.prisma.definition.findMany({
                orderBy: {
                    label: 'asc',
                },
            });
            return definitions;
        });
    }
};
FindAllService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/find/find.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const find_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.service.ts");
let FindController = class FindController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find a definition based on id
     * @param id
     * @returns definition
     */
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.find(+id);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FindController.prototype, "find", null);
FindController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
], FindController);
exports.FindController = FindController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/find/find.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.service.ts");
const find_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.controller.ts");
let FindModule = class FindModule {
};
FindModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService],
    })
], FindModule);
exports.FindModule = FindModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/find/find.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindService = class FindService {
    /**
     * finds a definition based on id
     * @param id
     * @returns definition
     */
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const definition = yield prisma_client_1.prisma.definition.findFirst({
                where: {
                    id,
                },
            });
            return definition;
        });
    }
};
FindService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindService);
exports.FindService = FindService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const update_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.service.ts");
// prisma schema
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a definition based on id
     * @param id
     * @param definition
     * @returns updated definition
     */
    update(id, definition) {
        return this.service.update(+id, definition);
    }
};
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_a = typeof client_1.Definition !== "undefined" && client_1.Definition) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = tslib_1.__decorate([
    (0, common_1.Controller)('Update'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a definition based on id
     * @param id
     * @param definition
     * @returns updated definition
     */
    update(id, definition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updatedDefinition = yield prisma_client_1.prisma.definition.update({
                where: {
                    id,
                },
                data: Object.assign({}, definition),
            });
            return updatedDefinition;
        });
    }
};
UpdateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/favorites.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FavoritesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.module.ts");
const findAllFiltered_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.module.ts");
let FavoritesModule = class FavoritesModule {
};
FavoritesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [findAll_module_1.FindAllModule, findAllFiltered_module_1.FindAllFilteredModule, create_module_1.CreateModule, delete_module_1.DeleteModule],
    })
], FavoritesModule);
exports.FavoritesModule = FavoritesModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.service.ts");
// prisma schema
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(favorite) {
        return this.service.create(favorite);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.RecipeFavorite !== "undefined" && client_1.RecipeFavorite) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = tslib_1.__decorate([
    (0, common_1.Controller)('favorites'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(favorite) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newFavorite = yield prisma_client_1.prisma.recipeFavorite.create({
                data: Object.assign({}, favorite),
            });
            if (newFavorite) {
                return newFavorite;
            }
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    delete(id) {
        return this.service.delete(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = tslib_1.__decorate([
    (0, common_1.Controller)('favorites'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deletedFavorite = yield prisma_client_1.prisma.recipeFavorite.delete({
                where: {
                    id,
                },
            });
            return deletedFavorite;
        });
    }
};
DeleteService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.service.ts");
let FindAllFilteredController = class FindAllFilteredController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all favorite recipes bases on user id, with filters
     * @param id (user)
     * @param filters
     * @returns an array of RecipeFavorite
     */
    findAllWithFilters(id, filters) {
        return this.service.findAllFiltered(+id, filters);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllFilteredController.prototype, "findAllWithFilters", null);
FindAllFilteredController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Favorites'),
    (0, common_1.Controller)('favorites'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAllFiltered_service_1.FindAllFilteredService !== "undefined" && findAllFiltered_service_1.FindAllFilteredService) === "function" ? _a : Object])
], FindAllFilteredController);
exports.FindAllFilteredController = FindAllFilteredController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.service.ts");
const findAllFiltered_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.controller.ts");
let FindAllFilteredModule = class FindAllFilteredModule {
};
FindAllFilteredModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAllFiltered_controller_1.FindAllFilteredController],
        providers: [findAllFiltered_service_1.FindAllFilteredService],
    })
], FindAllFilteredModule);
exports.FindAllFilteredModule = FindAllFilteredModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllFilteredService = class FindAllFilteredService {
    findAllFiltered(id, filters) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('filters');
            console.log(filters);
            const favorites = yield prisma_client_1.prisma.recipeFavorite.findMany({
                where: {
                    userId: id,
                    recipe: {
                        AND: [
                            {
                                difficulty: filters.difficulty ? filters.difficulty : undefined,
                            },
                            {
                                recipeTags: {
                                    some: {
                                        tag: {
                                            name: filters.tag ? filters.tag : undefined,
                                        },
                                    },
                                },
                            },
                            {
                                avgReview: filters.rating ? +filters.rating : undefined,
                            },
                        ],
                    },
                },
                include: {
                    recipe: {
                        include: {
                            author: true,
                            recipeInstructions: true,
                            recipeNotes: true,
                            requiredIngredients: true,
                            requiredUstensils: true,
                            recipeTags: {
                                include: {
                                    tag: true,
                                },
                            },
                            recipeComments: {
                                include: {
                                    author: true,
                                },
                            },
                            recipeReviews: true,
                            recipeFavorites: true,
                        },
                    },
                },
            });
            return favorites;
        });
    }
};
FindAllFilteredService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllFilteredService);
exports.FindAllFilteredService = FindAllFilteredService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all favorite recipes bases on user id
     * @param id string
     * @returns an array of favorites
     */
    findAll(id) {
        return this.service.findAll(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Favorites'),
    (0, common_1.Controller)('favorites'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * find all favorite recipes bases on user id
     * @param id number
     * @returns an array of favorites
     */
    findAll(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const favorites = yield prisma_client_1.prisma.recipeFavorite.findMany({
                where: {
                    userId: id,
                },
                include: {
                    recipe: {
                        include: {
                            author: true,
                            recipeInstructions: true,
                            recipeNotes: true,
                            requiredIngredients: true,
                            requiredUstensils: true,
                            recipeTags: {
                                include: {
                                    tag: true,
                                },
                            },
                            recipeComments: {
                                include: {
                                    author: true,
                                },
                            },
                            recipeReviews: true,
                            recipeFavorites: true,
                        },
                    },
                },
            });
            return favorites;
        });
    }
};
FindAllService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/files/files.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const getPicture_module_1 = __webpack_require__("./apps/api/src/modules/files/useCases/getPicture/getPicture.module.ts");
let FilesModule = class FilesModule {
};
FilesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [getPicture_module_1.GetPictureModule],
    })
], FilesModule);
exports.FilesModule = FilesModule;


/***/ }),

/***/ "./apps/api/src/modules/files/useCases/getPicture/getPicture.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPictureController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const fs_1 = __webpack_require__("fs");
const path_1 = __webpack_require__("path");
let GetPictureController = class GetPictureController {
    /**
     * Find a file by name and return it as a streamable file
     * @param {string} name - The name of the file to be returned.
     * @param res - The response object.
     * @returns A StreamableFile object.
     */
    find(name, res) {
        // return this.service.find(name);
        const fileExists = (0, fs_1.existsSync)((0, path_1.join)(__dirname, 'assets/public/' + name));
        let file;
        // const file = createReadStream(join(__dirname, 'public/' + name));
        if (fileExists) {
            file = (0, fs_1.createReadStream)((0, path_1.join)(__dirname, 'assets/public/' + name));
        }
        else {
            file = (0, fs_1.createReadStream)((0, path_1.join)(__dirname, 'assets/public/nopicture.jpg'));
        }
        res.set({
            'Content-Type': 'image/jpeg',
            'Content-Disposition': 'attachment; filename="picture.jpeg"',
        });
        return new common_1.StreamableFile(file);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':name'),
    tslib_1.__param(0, (0, common_1.Param)('name')),
    tslib_1.__param(1, (0, common_1.Response)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof common_1.StreamableFile !== "undefined" && common_1.StreamableFile) === "function" ? _a : Object)
], GetPictureController.prototype, "find", null);
GetPictureController = tslib_1.__decorate([
    (0, common_1.Controller)('getpicture')
], GetPictureController);
exports.GetPictureController = GetPictureController;


/***/ }),

/***/ "./apps/api/src/modules/files/useCases/getPicture/getPicture.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPictureModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const getPicture_controller_1 = __webpack_require__("./apps/api/src/modules/files/useCases/getPicture/getPicture.controller.ts");
let GetPictureModule = class GetPictureModule {
};
GetPictureModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [getPicture_controller_1.GetPictureController],
    })
], GetPictureModule);
exports.GetPictureModule = GetPictureModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/posts.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.module.ts");
const find_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.module.ts");
const findLast_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.module.ts");
let PostsModule = class PostsModule {
};
PostsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            findLast_module_1.FindLastModule,
            find_module_1.FindModule,
            findAll_module_1.FindAllModule,
            update_module_1.UpdateModule,
        ],
    })
], PostsModule);
exports.PostsModule = PostsModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(post) {
        return this.service.create(post);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.Post !== "undefined" && client_1.Post) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = tslib_1.__decorate([
    (0, common_1.Controller)('posts'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newPost = yield prisma_client_1.prisma.post.create({
                data: {
                    title: post.title,
                    content: post.content,
                    picture: post.picture,
                    published: false,
                    authorId: post.authorId,
                },
            });
            return newPost;
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * get all posts
     * @returns an array of Post
     */
    findAll() {
        return this.service.findAll();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = tslib_1.__decorate([
    (0, common_1.Controller)('posts'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * get all posts
     * @returns an array of Post
     */
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const posts = yield prisma_client_1.prisma.post.findMany({
                include: {
                    author: true,
                },
            });
            return posts;
        });
    }
};
FindAllService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findLast/findLast.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.service.ts");
let FindLastController = class FindLastController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find last post created
     * @returns post
     */
    findLast() {
        return this.service.findLast();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/last'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], FindLastController.prototype, "findLast", null);
FindLastController = tslib_1.__decorate([
    (0, common_1.Controller)('posts'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findLast_service_1.FindLastService !== "undefined" && findLast_service_1.FindLastService) === "function" ? _a : Object])
], FindLastController);
exports.FindLastController = FindLastController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findLast/findLast.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.service.ts");
const findLast_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.controller.ts");
let FindLastModule = class FindLastModule {
};
FindLastModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findLast_controller_1.FindLastController],
        providers: [findLast_service_1.FindLastService],
    })
], FindLastModule);
exports.FindLastModule = FindLastModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findLast/findLast.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindLastService = class FindLastService {
    /**
     * find last post created
     * @returns post
     */
    findLast() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const post = yield prisma_client_1.prisma.post.findFirst({
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    author: true,
                },
            });
            return post;
        });
    }
};
FindLastService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindLastService);
exports.FindLastService = FindLastService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/find/find.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.service.ts");
let FindController = class FindController {
    constructor(service) {
        this.service = service;
    }
    /**
     * finds a recipe based on id
     * @param id
     * @returns recipe
     */
    find(id) {
        return this.service.find(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], FindController.prototype, "find", null);
FindController = tslib_1.__decorate([
    (0, common_1.Controller)('posts'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
], FindController);
exports.FindController = FindController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/find/find.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.service.ts");
const find_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.controller.ts");
let FindModule = class FindModule {
};
FindModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService],
    })
], FindModule);
exports.FindModule = FindModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/find/find.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindService = class FindService {
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const post = yield prisma_client_1.prisma.post.findUnique({
                where: {
                    id: id,
                },
                include: {
                    author: true,
                },
            });
            return post;
        });
    }
};
FindService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindService);
exports.FindService = FindService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a post based on id
     * @param id
     * @param post
     * @returns updated post
     */
    update(id, post) {
        return this.service.update(+id, post);
    }
};
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_a = typeof client_1.Post !== "undefined" && client_1.Post) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = tslib_1.__decorate([
    (0, common_1.Controller)('posts'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a post based on id
     * @param id
     * @param post
     * @returns updated post
     */
    update(id, post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updatedPost = yield prisma_client_1.prisma.post.update({
                where: {
                    id: id,
                },
                data: post,
            });
            return updatedPost;
        });
    }
};
UpdateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/recipes-comments.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipesCommentsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_module_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.module.ts");
let RecipesCommentsModule = class RecipesCommentsModule {
};
RecipesCommentsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [create_module_1.CreateModule],
    })
], RecipesCommentsModule);
exports.RecipesCommentsModule = RecipesCommentsModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/useCases/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.service.ts");
// schema
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(comment) {
        return this.service.create(comment);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.RecipeComment !== "undefined" && client_1.RecipeComment) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes-comments'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/useCases/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/useCases/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newComment = yield prisma_client_1.prisma.recipeComment.create({
                data: Object.assign({}, comment),
            });
            return newComment;
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/recipes-tags.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipesTagsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.module.ts");
let RecipesTagsModule = class RecipesTagsModule {
};
RecipesTagsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [findAll_module_1.FindAllModule],
    })
], RecipesTagsModule);
exports.RecipesTagsModule = RecipesTagsModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all recipe tags options
     * @returns an array of tags categories including different labels
     */
    findAll() {
        return this.service.findAll();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], FindAllController.prototype, "findAll", null);
FindAllController = tslib_1.__decorate([
    (0, common_1.Controller)('tags'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _b : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tags = yield prisma_client_1.prisma.recipeTagCategory.findMany({
                include: {
                    RecipeTagLabels: true,
                },
            });
            return tags;
        });
    }
};
FindAllService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/recipes.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const authorCount_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.module.ts");
const find_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.module.ts");
const findAllFiltered_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.module.ts");
const findLast_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.module.ts");
const findAllNamed_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.module.ts");
let RecipesModule = class RecipesModule {
};
RecipesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            authorCount_module_1.AuthorCountModule,
            create_module_1.CreateModule,
            delete_module_1.DeleteModule,
            findLast_module_1.FindLastModule,
            findAll_module_1.FindAllModule,
            findAllFiltered_module_1.FindAllFilteredModule,
            update_module_1.UpdateModule,
            find_module_1.FindModule,
            findAllNamed_module_1.FindAllNamedModule,
        ],
    })
], RecipesModule);
exports.RecipesModule = RecipesModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/authorCount/authorCount.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorCountController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const authorCount_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.service.ts");
let AuthorCountController = class AuthorCountController {
    constructor(service) {
        this.service = service;
    }
    /**
     * get recipe count based on user id
     * @param id
     * @returns number
     */
    getAuthorCount(id) {
        return this.service.getAuthorCount(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('authorcount/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthorCountController.prototype, "getAuthorCount", null);
AuthorCountController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof authorCount_service_1.AuthorCountService !== "undefined" && authorCount_service_1.AuthorCountService) === "function" ? _a : Object])
], AuthorCountController);
exports.AuthorCountController = AuthorCountController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/authorCount/authorCount.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorCountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const authorCount_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.service.ts");
const authorCount_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.controller.ts");
let AuthorCountModule = class AuthorCountModule {
};
AuthorCountModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [authorCount_controller_1.AuthorCountController],
        providers: [authorCount_service_1.AuthorCountService],
    })
], AuthorCountModule);
exports.AuthorCountModule = AuthorCountModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/authorCount/authorCount.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorCountService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// utils
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let AuthorCountService = class AuthorCountService {
    /**
     * get recipe count based on user id
     * @param authorId
     * @returns number
     */
    getAuthorCount(authorId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const count = yield prisma_client_1.prisma.recipe.count({
                where: {
                    authorId: +authorId,
                },
            });
            return count;
        });
    }
};
AuthorCountService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AuthorCountService);
exports.AuthorCountService = AuthorCountService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.service.ts");
const multer_1 = __webpack_require__("multer");
const path_1 = __webpack_require__("path");
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(recipe) {
        return this.service.create(recipe);
    }
    /**
     * The function takes a picture as a parameter, and then returns the result of the storePicture
     * function in the service
     * @param picture - Express.Multer.File
     */
    storePicture(picture) {
        return this.service.storePicture(picture);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.Recipe !== "undefined" && client_1.Recipe) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Post)('/picture')
    /* A decorator that intercepts the file and stores it in the public folder. */
    ,
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('picture', {
        storage: (0, multer_1.diskStorage)({
            destination: __dirname + '/assets/public',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "storePicture", null);
CreateController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _d : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(recipe) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newRecipe = yield prisma_client_1.prisma.recipe.create({
                data: {
                    author: { connect: { id: recipe.authorId } },
                    name: recipe.name,
                    picture: recipe.picture || null,
                    difficulty: recipe.difficulty,
                    cookTime: recipe.cookTime,
                    serves: recipe.serves,
                    description: recipe.description,
                    unit: recipe.unit,
                    requiredIngredients: {
                        create: [...recipe.requiredIngredients],
                    },
                    recipeInstructions: {
                        create: [...recipe.recipeInstructions],
                    },
                    recipeNotes: {
                        create: [...recipe.recipeNotes],
                    },
                    recipeTags: {
                        create: [...recipe.recipeTags],
                    },
                },
            });
            return newRecipe;
        });
    }
    storePicture(picture) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return picture;
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const delete_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    /**
     * delete a recipe based on id
     * @param id
     * @returns removed recipe
     */
    delete(id) {
        return this.service.delete(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return prisma_client_1.prisma.recipe.delete({
            where: {
                id: id,
            },
        });
    }
};
DeleteService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.service.ts");
let FindAllFilteredController = class FindAllFilteredController {
    constructor(service) {
        this.service = service;
    }
    /**
     * return all recipes based on filters
     * @param filters
     * @returns an array of Recipe
     */
    findAllWithFilters(filters) {
        return this.service.findAllFiltered(filters);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('/filters'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllFilteredController.prototype, "findAllWithFilters", null);
FindAllFilteredController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAllFiltered_service_1.FindAllFilteredService !== "undefined" && findAllFiltered_service_1.FindAllFilteredService) === "function" ? _a : Object])
], FindAllFilteredController);
exports.FindAllFilteredController = FindAllFilteredController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.service.ts");
const findAllFiltered_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.controller.ts");
let FindAllFilteredModule = class FindAllFilteredModule {
};
FindAllFilteredModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAllFiltered_controller_1.FindAllFilteredController],
        providers: [findAllFiltered_service_1.FindAllFilteredService],
    })
], FindAllFilteredModule);
exports.FindAllFilteredModule = FindAllFilteredModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllFilteredService = class FindAllFilteredService {
    /**
     * return all recipes based on filters
     * @param filters
     * @returns an array of Recipe
     */
    findAllFiltered(filters) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tags = [];
            if (filters.tags && filters.tags.length > 0) {
                for (const tag of filters.tags)
                    tags.push(tag.id);
            }
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                where: {
                    AND: [
                        {
                            author: {
                                nickname: {
                                    contains: (_a = filters.authorName) !== null && _a !== void 0 ? _a : undefined,
                                }
                            }
                        },
                        {
                            name: {
                                contains: (_b = filters.recipeName) !== null && _b !== void 0 ? _b : undefined,
                            }
                        },
                        {
                            difficulty: filters.difficulty ? filters.difficulty : undefined,
                        },
                        {
                            recipeTags: {
                                some: {
                                    tagId: {
                                        in: tags.length > 0 ? tags : undefined,
                                    }
                                }
                            },
                        },
                        {
                            avgReview: filters.rating ? +filters.rating : undefined,
                        },
                    ],
                },
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindAllFilteredService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllFilteredService);
exports.FindAllFilteredService = FindAllFilteredService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllNamedController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllNamed_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.service.ts");
let FindAllNamedController = class FindAllNamedController {
    constructor(service) {
        this.service = service;
    }
    /**
     * return all recipes based on filters
     * @param filters
     * @returns an array of Recipe
     */
    findAllWithFilters(name) {
        return this.service.findAllNamed(name);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/name/:name'),
    tslib_1.__param(0, (0, common_1.Param)('name')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllNamedController.prototype, "findAllWithFilters", null);
FindAllNamedController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAllNamed_service_1.FindAllNamedService !== "undefined" && findAllNamed_service_1.FindAllNamedService) === "function" ? _a : Object])
], FindAllNamedController);
exports.FindAllNamedController = FindAllNamedController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllNamedModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllNamed_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.service.ts");
const findAllNamed_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.controller.ts");
let FindAllNamedModule = class FindAllNamedModule {
};
FindAllNamedModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAllNamed_controller_1.FindAllNamedController],
        providers: [findAllNamed_service_1.FindAllNamedService],
    })
], FindAllNamedModule);
exports.FindAllNamedModule = FindAllNamedModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllNamedService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllNamedService = class FindAllNamedService {
    /**
     * Find all recipes that have a name that contains the given string
     * @param {string} name - The name of the recipe.
     * @returns An array of Recipe objects.
     */
    findAllNamed(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                where: {
                    name: {
                        contains: name,
                    },
                },
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindAllNamedService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllNamedService);
exports.FindAllNamedService = FindAllNamedService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all recipes
     * @returns an array of Recipe
     */
    findAll() {
        return this.service.findAll();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindAllService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findLast/findLast.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.service.ts");
let FindLastController = class FindLastController {
    constructor(service) {
        this.service = service;
    }
    /**
     * return the 3 last recipes created
     * @returns an array of Recipe
     */
    findLast() {
        return this.service.findLast();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/last'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], FindLastController.prototype, "findLast", null);
FindLastController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof findLast_service_1.FindLastService !== "undefined" && findLast_service_1.FindLastService) === "function" ? _b : Object])
], FindLastController);
exports.FindLastController = FindLastController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findLast/findLast.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.service.ts");
const findLast_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.controller.ts");
let FindLastModule = class FindLastModule {
};
FindLastModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findLast_controller_1.FindLastController],
        providers: [findLast_service_1.FindLastService],
    })
], FindLastModule);
exports.FindLastModule = FindLastModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findLast/findLast.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindLastService = class FindLastService {
    /**
     * return last 3 FindLast posted
     * @returns an array of Recipe
     */
    findLast() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
                take: 3,
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindLastService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindLastService);
exports.FindLastService = FindLastService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/find/find.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.service.ts");
let FindController = class FindController {
    constructor(service) {
        this.service = service;
    }
    /**
     * finds a recipe based on id
     * @param id
     * @returns recipe
     */
    find(id) {
        return this.service.find(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], FindController.prototype, "find", null);
FindController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
], FindController);
exports.FindController = FindController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/find/find.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.service.ts");
const find_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.controller.ts");
let FindModule = class FindModule {
};
FindModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService],
    })
], FindModule);
exports.FindModule = FindModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/find/find.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindService = class FindService {
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const recipe = yield prisma_client_1.prisma.recipe.findUnique({
                where: {
                    id: id,
                },
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipe;
        });
    }
};
FindService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindService);
exports.FindService = FindService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a recipe based on id
     * @param id
     * @param recipe
     * @returns updated recipe
     */
    update(id, recipe) {
        return this.service.update(+id, recipe);
    }
};
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_a = typeof client_1.Recipe !== "undefined" && client_1.Recipe) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = tslib_1.__decorate([
    (0, common_1.Controller)('recipes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a recipe based on id
     * @param id
     * @param recipe
     * @returns updated recipe
     */
    update(id, recipe) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updatedRecipe = yield prisma_client_1.prisma.recipe.update({
                where: {
                    id: id,
                },
                data: {
                    author: { connect: { id: recipe.authorId } },
                    name: recipe.name,
                    picture: recipe.picture || null,
                    difficulty: recipe.difficulty,
                    cookTime: recipe.cookTime,
                    serves: recipe.serves,
                    description: recipe.description,
                    unit: recipe.unit,
                    recipeTags: {
                        deleteMany: {},
                        create: [...recipe.recipeTags],
                    },
                    requiredIngredients: {
                        deleteMany: {},
                        create: [...recipe.requiredIngredients],
                    },
                    recipeInstructions: {
                        deleteMany: {},
                        create: [...recipe.recipeInstructions],
                    },
                    recipeNotes: {
                        deleteMany: {},
                        create: [...recipe.recipeNotes],
                    }
                },
            });
            // if (updatedRecipe) {
            //   for (const ingredient of recipe.requiredIngredients) {
            //     if (ingredient.id && ingredient.recipeId) {
            //       await prisma.requiredIngredient.update({
            //         where: {
            //           id: ingredient.id,
            //         },
            //         data: {
            //           ...ingredient
            //         },
            //       });
            //     } else {
            //       await prisma.requiredIngredient.create({
            //         data: {
            //           recipeId: id,
            //           ...ingredient
            //         },
            //       });
            //     }
            //   }
            //   for (const instruction of recipe.recipeInstructions) {
            //     if (instruction.id && instruction.recipeId) {
            //       await prisma.recipeInstruction.update({
            //         where: {
            //           id: instruction.id,
            //         },
            //         data: {
            //           ...instruction
            //         },
            //       });
            //     } else {
            //       await prisma.recipeInstruction.create({
            //         data: {
            //           recipeId: id,
            //           ...instruction
            //         },
            //       });
            //     }
            //   }
            //   for (const note of recipe.recipeNotes) {
            //     if (note.id && note.recipeId) {
            //       await prisma.recipeNote.update({
            //         where: {
            //           id: note.id,
            //         },
            //         data: {
            //           ...note
            //         },
            //       });
            //     } else {
            //       await prisma.recipeNote.create({
            //         data: {
            //           recipeId: id,
            //           ...note
            //         },
            //       });
            //     }
            //   }
            // }
            return updatedRecipe;
        });
    }
};
UpdateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/reviews/reviews.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReviewsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const check_module_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.module.ts");
let ReviewsModule = class ReviewsModule {
};
ReviewsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [create_module_1.CreateModule, update_module_1.UpdateModule, check_module_1.CheckModule],
    })
], ReviewsModule);
exports.ReviewsModule = ReviewsModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/check/check.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const check_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.service.ts");
let CheckController = class CheckController {
    constructor(service) {
        this.service = service;
    }
    /**
     * check if user already reviewed a recipe
     * @param recipeId
     * @param userId
     * @returns review
     */
    check(recipeId, userId) {
        return this.service.check(recipeId, userId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/check/:recipeId/:userId'),
    tslib_1.__param(0, (0, common_1.Param)('recipeId')),
    tslib_1.__param(1, (0, common_1.Param)('userId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], CheckController.prototype, "check", null);
CheckController = tslib_1.__decorate([
    (0, common_1.Controller)('reviews'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof check_service_1.CheckService !== "undefined" && check_service_1.CheckService) === "function" ? _a : Object])
], CheckController);
exports.CheckController = CheckController;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/check/check.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const check_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.service.ts");
const check_controller_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.controller.ts");
let CheckModule = class CheckModule {
};
CheckModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [check_controller_1.CheckController],
        providers: [check_service_1.CheckService],
    })
], CheckModule);
exports.CheckModule = CheckModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/check/check.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CheckService = class CheckService {
    /**
     * check if user already reviewed a recipe
     * @param recipeId
     * @param userId
     * @returns review
     */
    check(recipeId, userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const review = yield prisma_client_1.prisma.recipeReview.findFirst({
                where: {
                    recipeId: +recipeId,
                    authorId: +userId,
                },
            });
            return review;
        });
    }
};
CheckService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CheckService);
exports.CheckService = CheckService;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.service.ts");
// schemas
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * create new review on recipe
     * @param review
     * @returns new review
     */
    create(review) {
        return this.service.create(review);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.RecipeReview !== "undefined" && client_1.RecipeReview) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = tslib_1.__decorate([
    (0, common_1.Controller)('reviews'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(review) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newReview = yield prisma_client_1.prisma.recipeReview.create({
                data: Object.assign({}, review),
            });
            return newReview;
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const update_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.service.ts");
// schemas
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a review based on id
     * @param id
     * @param review
     * @returns updated review
     */
    update(id, review) {
        return this.service.update(+id, review);
    }
};
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_a = typeof client_1.RecipeReview !== "undefined" && client_1.RecipeReview) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = tslib_1.__decorate([
    (0, common_1.Controller)('reviews'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a review based on id
     * @param id
     * @param review
     * @returns updated review
     */
    update(id, review) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updatedReview = yield prisma_client_1.prisma.recipeReview.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, review),
            });
            return updatedReview;
        });
    }
};
UpdateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/shopping-list.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShoppingListModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.module.ts");
const deleteAll_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.module.ts");
let ShoppingListModule = class ShoppingListModule {
};
ShoppingListModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [create_module_1.CreateModule, findAll_module_1.FindAllModule, deleteAll_module_1.DeleteAllModule, delete_module_1.DeleteModule],
    })
], ShoppingListModule);
exports.ShoppingListModule = ShoppingListModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.service.ts");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(shoppinglist) {
        return this.service.create(shoppinglist);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = tslib_1.__decorate([
    (0, common_1.Controller)('shopping-list'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _a : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(shoppinglist) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const list = {
                recipeId: shoppinglist.recipeId,
                userId: +shoppinglist.userId,
                shoppingListItems: {
                    create: [...shoppinglist.ingredients],
                },
            };
            const newList = yield prisma_client_1.prisma.shoppingList.create({ data: list });
            return newList;
        });
    }
};
CreateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const deleteAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.service.ts");
let DeleteAllController = class DeleteAllController {
    constructor(service) {
        this.service = service;
    }
    deleteAll(id) {
        return this.service.deleteAll(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Delete)('all/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], DeleteAllController.prototype, "deleteAll", null);
DeleteAllController = tslib_1.__decorate([
    (0, common_1.Controller)('shopping-list'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof deleteAll_service_1.DeleteAllService !== "undefined" && deleteAll_service_1.DeleteAllService) === "function" ? _a : Object])
], DeleteAllController);
exports.DeleteAllController = DeleteAllController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const deleteAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.service.ts");
const deleteAll_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.controller.ts");
let DeleteAllModule = class DeleteAllModule {
};
DeleteAllModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [deleteAll_controller_1.DeleteAllController],
        providers: [deleteAll_service_1.DeleteAllService],
    })
], DeleteAllModule);
exports.DeleteAllModule = DeleteAllModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteAllService = class DeleteAllService {
    /**
     * Delete all shopping lists and their items for a given user
     * @param {number} userId - The id of the user whose shopping lists you want to delete.
     */
    deleteAll(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shoppingLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId,
                },
            });
            if (shoppingLists) {
                // delete shopping lists items first
                for (const list of shoppingLists) {
                    const count = yield prisma_client_1.prisma.shoppingListItem.deleteMany({
                        where: {
                            shoppingListId: +list.id,
                        },
                    });
                    // then delete list
                    if (count) {
                        yield prisma_client_1.prisma.shoppingList.delete({
                            where: {
                                id: +list.id,
                            },
                        });
                    }
                }
            }
            // check if all lists successfully deleted
            const checkLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId,
                },
            });
            if (checkLists.length === 0) {
                return { res: 'success' };
            }
        });
    }
};
DeleteAllService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DeleteAllService);
exports.DeleteAllService = DeleteAllService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const delete_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    delete(id) {
        return this.service.delete(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = tslib_1.__decorate([
    (0, common_1.Controller)('shopping-list'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // delete list items first
            const count = yield prisma_client_1.prisma.shoppingListItem.deleteMany({
                where: {
                    shoppingListId: id,
                },
            });
            // then delete list
            if (count) {
                const deletedList = yield prisma_client_1.prisma.shoppingList.delete({
                    where: {
                        id,
                    },
                });
                return deletedList;
            }
        });
    }
};
DeleteService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    create(id) {
        return this.service.findAll(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], FindAllController.prototype, "create", null);
FindAllController = tslib_1.__decorate([
    (0, common_1.Controller)('shopping-list'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * get all posts
     * @returns an array of Post
     */
    findAll(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shoppingLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId,
                },
                include: {
                    recipe: true,
                    shoppingListItems: true,
                },
            });
            return shoppingLists;
        });
    }
};
FindAllService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAvatarController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updateAvatar_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.service.ts");
let UpdateAvatarController = class UpdateAvatarController {
    constructor(service) {
        this.service = service;
    }
    updateAvatar(id, avatar) {
        return this.service.updateAvatar(+id, avatar);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(':id/avatar'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UpdateAvatarController.prototype, "updateAvatar", null);
UpdateAvatarController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof updateAvatar_service_1.UpdateAvatarService !== "undefined" && updateAvatar_service_1.UpdateAvatarService) === "function" ? _a : Object])
], UpdateAvatarController);
exports.UpdateAvatarController = UpdateAvatarController;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAvatarModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updateAvatar_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.service.ts");
const updateAvatar_controller_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.controller.ts");
let UpdateAvatarModule = class UpdateAvatarModule {
};
UpdateAvatarModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [updateAvatar_controller_1.UpdateAvatarController],
        providers: [updateAvatar_service_1.UpdateAvatarService],
    })
], UpdateAvatarModule);
exports.UpdateAvatarModule = UpdateAvatarModule;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAvatarService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
// utils
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
let UpdateAvatarService = class UpdateAvatarService {
    updateAvatar(id, avatar) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_client_1.prisma.user.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, avatar),
            });
            if (user) {
                const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                delete user.password;
                return Object.assign(Object.assign({}, user), { accessToken });
            }
        });
    }
};
UpdateAvatarService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UpdateAvatarService);
exports.UpdateAvatarService = UpdateAvatarService;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * updates user data based on id
     * @param id
     * @param user
     * @returns new user data
     */
    update(id, user) {
        return this.service.update(+id, user);
    }
};
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_a = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// utils
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * updates user data based on id
     * @param id
     * @param user
     * @returns new user data
     */
    update(id, userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_client_1.prisma.user.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, userData),
            });
            const accessToken = yield jwt_1.Jwt.signAccessToken(user);
            delete user.password;
            return Object.assign(Object.assign({}, user), { accessToken });
        });
    }
};
UpdateService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/users/users.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updateAvatar_module_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.module.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [update_module_1.UpdateModule, updateAvatar_module_1.UpdateAvatarModule],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/utils/jwt.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jwt = void 0;
const tslib_1 = __webpack_require__("tslib");
const dotenv_1 = tslib_1.__importDefault(__webpack_require__("dotenv"));
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const http_errors_1 = tslib_1.__importDefault(__webpack_require__("http-errors"));
const google_auth_library_1 = __webpack_require__("google-auth-library");
const moment_1 = tslib_1.__importDefault(__webpack_require__("moment"));
dotenv_1.default.config();
class Jwt {
    static signAccessToken(payload) {
        return new Promise((resolve, reject) => {
            jwt.sign({ payload }, process.env['ACCESS_TOKEN_SECRET'], {}, (err, token) => {
                if (err) {
                    reject(http_errors_1.default['InternalServeurError']);
                }
                resolve(token);
            });
        });
    }
    static verifyGoogleTOken(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const client = new google_auth_library_1.OAuth2Client(process.env['GOOGLE_CLIENT_ID']);
            const ticket = yield client.verifyIdToken({
                idToken: token,
                audience: process.env['GOOGLE_CLIENT_ID'],
            });
            const payload = ticket.getPayload();
            const validISS = payload.iss === 'https://accounts.google.com' ? true : false;
            const validAUD = payload.aud === process.env['GOOGLE_CLIENT_ID'] ? true : false;
            const validEXP = (0, moment_1.default)(payload.exp).isBefore(moment_1.default.now()) ? true : false;
            const validEmail = payload.email_verified;
            const email = payload.email;
            if (validISS && validAUD && validEXP && validEmail && email) {
                return email;
            }
            else {
                return false;
            }
        });
    }
}
exports.Jwt = Jwt;


/***/ }),

/***/ "./libs/prisma-client/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prisma = void 0;
var prisma_client_1 = __webpack_require__("./libs/prisma-client/src/prisma-client.ts");
Object.defineProperty(exports, "prisma", ({ enumerable: true, get: function () { return prisma_client_1.prisma; } }));


/***/ }),

/***/ "./libs/prisma-client/src/prisma-client.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prisma = void 0;
// create a single client to handle whole app
const client_1 = __webpack_require__("@prisma/client");
exports.prisma = new client_1.PrismaClient();


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "google-auth-library":
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ }),

/***/ "helmet":
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "http-errors":
/***/ ((module) => {

module.exports = require("http-errors");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "multer":
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "nodemailer":
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "fs":
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const helmet_1 = tslib_1.__importDefault(__webpack_require__("helmet"));
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
const configureSwagger = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('While Hungry')
        .setDescription('REST API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
};
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        // set api prefix
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        // set http headers to prevent security vulnerabilites
        app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
        // enable cors origin between apps
        app.enableCors();
        // protection against csurf attacks
        // app.use(cookieParser());
        // app.use(
        //   session({
        //     secret: 'ultrasecresessionpassword',
        //     resave: false,
        //     saveUninitialized: false,
        //   }),
        // );
        // app.use(csurf());
        // app.use('*', function (req, res) {
        //   res.cookie('XSRF-TOKEN', req.csrfToken())
        // })
        // configure swagger for api endpoints documentation
        configureSwagger(app);
        const port = process.env.PORT || 3000;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map