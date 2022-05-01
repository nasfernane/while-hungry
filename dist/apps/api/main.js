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
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
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
AppModule = (0, tslib_1.__decorate)([
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
            recipes_tags_module_1.RecipesTagsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard }
        ],
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
AppService = (0, tslib_1.__decorate)([
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
        response
            .status(status)
            .json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
HttpExceptionFilter = (0, tslib_1.__decorate)([
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
const jwt = (0, tslib_1.__importStar)(__webpack_require__("jsonwebtoken"));
let CheckAuthMiddleware = class CheckAuthMiddleware {
    use(req, res, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
            const decoded = token ? jwt.verify(token, process.env['ACCESS_TOKEN_SECRET']) : null;
            if (!token || !decoded) {
                throw new common_2.HttpException('Unauthorized', common_2.HttpStatus.UNAUTHORIZED);
            }
            ;
            next();
        });
    }
};
CheckAuthMiddleware = (0, tslib_1.__decorate)([
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
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            register_module_1.RegisterModule,
            login_module_1.LoginModule,
            updatePassword_module_1.UpdatePasswordModule
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;


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
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The user has been successfully logged.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/login'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], LoginController.prototype, "login", null);
LoginController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" ? _a : Object])
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
LoginModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService]
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
const bcrypt = (0, tslib_1.__importStar)(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let LoginService = class LoginService {
    login(param) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, password } = param;
            const user = yield prisma_client_1.prisma.user.findUnique({
                where: {
                    email
                }
            });
            // if user not found or wrontg credentials
            if (!user || !bcrypt.compareSync(password, user.password)) {
                return { status: 404, message: "Bad credentials" };
            }
            delete user.password;
            const accessToken = yield jwt_1.Jwt.signAccessToken(user);
            return Object.assign(Object.assign({}, user), { accessToken });
        });
    }
};
LoginService = (0, tslib_1.__decorate)([
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.service.register(Param);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The user has been successfully created.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/register'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RegisterController.prototype, "register", null);
RegisterController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" ? _a : Object])
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
RegisterModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [register_controller_1.RegisterController],
        providers: [register_service_1.RegisterService]
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
const http_errors_1 = (0, tslib_1.__importDefault)(__webpack_require__("http-errors"));
const bcrypt = (0, tslib_1.__importStar)(__webpack_require__("bcrypt"));
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, nickname, passwordConfirm } = param;
            let { password } = param;
            if (password === passwordConfirm) {
                password = bcrypt.hashSync(password, 8);
                // create new user with a default avatar
                const user = yield prisma_client_1.prisma.user.create({
                    data: { email, nickname, password, avatar: 'avatar9' }
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
RegisterService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The password has been successfully updated.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/pwupdate/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdatePasswordController.prototype, "updatePassword", null);
UpdatePasswordController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof updatePassword_service_1.UpdatePasswordService !== "undefined" && updatePassword_service_1.UpdatePasswordService) === "function" ? _a : Object])
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
UpdatePasswordModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [updatePassword_controller_1.UpdatePasswordController],
        providers: [updatePassword_service_1.UpdatePasswordService]
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
const bcrypt = (0, tslib_1.__importStar)(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let UpdatePasswordService = class UpdatePasswordService {
    updatePassword(id, passwords) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { oldPassword, password } = passwords;
            const user = yield prisma_client_1.prisma.user.findUnique({
                where: {
                    id
                }
            });
            // if user not found or wrontg credentials
            if (!user || !bcrypt.compareSync(oldPassword, user.password)) {
                return { status: 404, message: "Bad credentials" };
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
UpdatePasswordService = (0, tslib_1.__decorate)([
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
ClapsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            check_module_1.CheckModule,
            create_module_1.CreateModule,
            count_module_1.CountModule
        ]
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/check'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Clap !== "undefined" && client_1.Clap) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CheckController.prototype, "check", null);
CheckController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Claps'),
    (0, common_1.Controller)('claps'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof check_service_1.CheckService !== "undefined" && check_service_1.CheckService) === "function" ? _b : Object])
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
CheckModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [check_controller_1.CheckController],
        providers: [check_service_1.CheckService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const clapExists = yield prisma_client_1.prisma.clap.findFirst({
                where: {
                    clapperId: +(clap.clapperId),
                    clappedId: +(clap.clappedId)
                }
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
CheckService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The clap has been successfully created.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Clap !== "undefined" && client_1.Clap) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Claps'),
    (0, common_1.Controller)('claps'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newClap = yield prisma_client_1.prisma.clap.create({
                data: {
                    clapperId: +clap.clapperId,
                    clappedId: +clap.clappedId
                }
            });
            return newClap;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.service.count(id);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/count/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CountController.prototype, "count", null);
CountController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('claps'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof count_service_1.CountService !== "undefined" && count_service_1.CountService) === "function" ? _a : Object])
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
CountModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [count_controller_1.CountController],
        providers: [count_service_1.CountService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const count = yield prisma_client_1.prisma.clap.count({
                where: {
                    clappedId: +id
                }
            });
            return count;
        });
    }
};
CountService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CountService);
exports.CountService = CountService;


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
DefinitionsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            delete_module_1.DeleteModule,
            find_module_1.FindModule,
            findAll_module_1.FindAllModule,
            update_module_1.UpdateModule,
        ]
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
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The user has been successfully created.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Definition !== "undefined" && client_1.Definition) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newDefinition = yield prisma_client_1.prisma.definition.create({
                data: Object.assign({}, definition)
            });
            return newDefinition;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "remove", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('Delete'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
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
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield prisma_client_1.prisma.definition.delete({
                where: {
                    id
                }
            });
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
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
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const definitions = yield prisma_client_1.prisma.definition.findMany({
                orderBy: {
                    label: 'asc',
                }
            });
            return definitions;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.service.find(+id);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindController.prototype, "find", null);
FindController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
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
FindModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const definition = yield prisma_client_1.prisma.definition.findFirst({
                where: {
                    id
                }
            });
            return definition;
        });
    }
};
FindService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.Definition !== "undefined" && client_1.Definition) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('Update'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
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
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedDefinition = yield prisma_client_1.prisma.definition.update({
                where: {
                    id
                },
                data: Object.assign({}, definition)
            });
            return updatedDefinition;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
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
FavoritesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            findAll_module_1.FindAllModule,
            findAllFiltered_module_1.FindAllFilteredModule,
            create_module_1.CreateModule,
            delete_module_1.DeleteModule
        ],
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.RecipeFavorite !== "undefined" && client_1.RecipeFavorite) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newFavorite = yield prisma_client_1.prisma.recipeFavorite.create({
                data: Object.assign({}, favorite)
            });
            if (newFavorite) {
                return newFavorite;
            }
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
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
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const deletedFavorite = yield prisma_client_1.prisma.recipeFavorite.delete({
                where: {
                    id
                }
            });
            return deletedFavorite;
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllFilteredController.prototype, "findAllWithFilters", null);
FindAllFilteredController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Favorites'),
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAllFiltered_service_1.FindAllFilteredService !== "undefined" && findAllFiltered_service_1.FindAllFilteredService) === "function" ? _a : Object])
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
FindAllFilteredModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAllFiltered_controller_1.FindAllFilteredController],
        providers: [findAllFiltered_service_1.FindAllFilteredService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
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
                                        }
                                    }
                                }
                            },
                            {
                                avgReview: filters.rating ? +filters.rating : undefined,
                            }
                        ]
                    }
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
                                }
                            },
                            recipeComments: {
                                include: {
                                    author: true,
                                },
                            },
                            recipeReviews: true,
                            recipeFavorites: true,
                        }
                    }
                }
            });
            return favorites;
        });
    }
};
FindAllFilteredService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Favorites'),
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
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
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const favorites = yield prisma_client_1.prisma.recipeFavorite.findMany({
                where: {
                    userId: id
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
                                }
                            },
                            recipeComments: {
                                include: {
                                    author: true,
                                },
                            },
                            recipeReviews: true,
                            recipeFavorites: true,
                        }
                    }
                }
            });
            return favorites;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
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
FilesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            getPicture_module_1.GetPictureModule
        ]
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
        const fileExists = (0, fs_1.existsSync)((0, path_1.join)(__dirname, 'public/' + name));
        let file;
        // const file = createReadStream(join(__dirname, 'public/' + name));
        if (fileExists) {
            file = (0, fs_1.createReadStream)((0, path_1.join)(__dirname, 'public/' + name));
        }
        else {
            file = (0, fs_1.createReadStream)((0, path_1.join)(__dirname, 'public/nopicture.jpg'));
        }
        res.set({
            'Content-Type': 'application/json',
            'Content-Disposition': 'attachment; filename="test.jpeg"',
        });
        return new common_1.StreamableFile(file);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':name'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('name')),
    (0, tslib_1.__param)(1, (0, common_1.Response)({ passthrough: true })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof common_1.StreamableFile !== "undefined" && common_1.StreamableFile) === "function" ? _a : Object)
], GetPictureController.prototype, "find", null);
GetPictureController = (0, tslib_1.__decorate)([
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
GetPictureModule = (0, tslib_1.__decorate)([
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
PostsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            findLast_module_1.FindLastModule,
            find_module_1.FindModule,
            findAll_module_1.FindAllModule,
            update_module_1.UpdateModule
        ]
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Post !== "undefined" && client_1.Post) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newPost = yield prisma_client_1.prisma.post.create({
                data: {
                    title: post.title,
                    content: post.content,
                    picture: post.picture,
                    published: false,
                    authorId: post.authorId
                }
            });
            return newPost;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
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
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const posts = yield prisma_client_1.prisma.post.findMany({
                include: {
                    author: true,
                }
            });
            return posts;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/last'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindLastController.prototype, "findLast", null);
FindLastController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findLast_service_1.FindLastService !== "undefined" && findLast_service_1.FindLastService) === "function" ? _a : Object])
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
FindLastModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findLast_controller_1.FindLastController],
        providers: [findLast_service_1.FindLastService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const post = yield prisma_client_1.prisma.post.findFirst({
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    author: true,
                }
            });
            return post;
        });
    }
};
FindLastService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindController.prototype, "find", null);
FindController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
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
FindModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const post = yield prisma_client_1.prisma.post.findUnique({
                where: {
                    id: id
                },
                include: {
                    author: true,
                }
            });
            return post;
        });
    }
};
FindService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.Post !== "undefined" && client_1.Post) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
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
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedPost = yield prisma_client_1.prisma.post.update({
                where: {
                    id: id
                },
                data: post
            });
            return updatedPost;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
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
RecipesCommentsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule
        ]
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.RecipeComment !== "undefined" && client_1.RecipeComment) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes-comments'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newComment = yield prisma_client_1.prisma.recipeComment.create({
                data: Object.assign({}, comment)
            });
            return newComment;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
RecipesTagsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [findAll_module_1.FindAllModule]
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('tags'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _b : Object])
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
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const tags = yield prisma_client_1.prisma.recipeTagCategory.findMany({
                include: {
                    RecipeTagLabels: true,
                }
            });
            return tags;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
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
RecipesModule = (0, tslib_1.__decorate)([
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
            findAllNamed_module_1.FindAllNamedModule
        ]
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)('authorcount/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AuthorCountController.prototype, "getAuthorCount", null);
AuthorCountController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof authorCount_service_1.AuthorCountService !== "undefined" && authorCount_service_1.AuthorCountService) === "function" ? _a : Object])
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
AuthorCountModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [authorCount_controller_1.AuthorCountController],
        providers: [authorCount_service_1.AuthorCountService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const count = yield prisma_client_1.prisma.recipe.count({
                where: {
                    authorId: +authorId,
                }
            });
            return count;
        });
    }
};
AuthorCountService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Recipe !== "undefined" && client_1.Recipe) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/picture')
    /* A decorator that intercepts the file and stores it in the public folder. */
    ,
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('picture', {
        storage: (0, multer_1.diskStorage)({
            destination: __dirname + '/public',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    (0, tslib_1.__param)(0, (0, common_1.UploadedFile)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "storePicture", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _d : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
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
                        create: [
                            ...recipe.requiredIngredients,
                        ]
                    },
                    recipeInstructions: {
                        create: [
                            ...recipe.recipeInstructions,
                        ]
                    },
                    recipeNotes: {
                        create: [
                            ...recipe.recipeNotes,
                        ]
                    },
                    recipeTags: {
                        create: [
                            ...recipe.recipeTags,
                        ]
                    }
                }
            });
            return newRecipe;
        });
    }
    storePicture(picture) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return picture;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
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
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService]
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
                id: id
            },
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/filters'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllFilteredController.prototype, "findAllWithFilters", null);
FindAllFilteredController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAllFiltered_service_1.FindAllFilteredService !== "undefined" && findAllFiltered_service_1.FindAllFilteredService) === "function" ? _a : Object])
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
FindAllFilteredModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAllFiltered_controller_1.FindAllFilteredController],
        providers: [findAllFiltered_service_1.FindAllFilteredService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                where: {
                    AND: [
                        {
                            difficulty: filters.difficulty ? filters.difficulty : undefined,
                        },
                        {
                            recipeTags: {
                                some: {
                                    tag: {
                                        name: filters.tag ? filters.tag : undefined,
                                    }
                                }
                            }
                        },
                        {
                            avgReview: filters.rating ? +filters.rating : undefined,
                        }
                    ]
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
                }
            });
            return recipes;
        });
    }
};
FindAllFilteredService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/name/:name'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('name')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllNamedController.prototype, "findAllWithFilters", null);
FindAllNamedController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAllNamed_service_1.FindAllNamedService !== "undefined" && findAllNamed_service_1.FindAllNamedService) === "function" ? _a : Object])
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
FindAllNamedModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAllNamed_controller_1.FindAllNamedController],
        providers: [findAllNamed_service_1.FindAllNamedService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                where: {
                    name: {
                        contains: name
                    }
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
                }
            });
            return recipes;
        });
    }
};
FindAllNamedService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
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
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
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
                        }
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                }
            });
            return recipes;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/last'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], FindLastController.prototype, "findLast", null);
FindLastController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof findLast_service_1.FindLastService !== "undefined" && findLast_service_1.FindLastService) === "function" ? _b : Object])
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
FindLastModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findLast_controller_1.FindLastController],
        providers: [findLast_service_1.FindLastService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
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
                        }
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        }
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                }
            });
            return recipes;
        });
    }
};
FindLastService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindController.prototype, "find", null);
FindController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
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
FindModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipe = yield prisma_client_1.prisma.recipe.findUnique({
                where: {
                    id: id
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
                        }
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        }
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                }
            });
            return recipe;
        });
    }
};
FindService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.Recipe !== "undefined" && client_1.Recipe) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
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
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedRecipe = prisma_client_1.prisma.recipe.update({
                where: {
                    id: id
                },
                data: Object.assign({}, recipe)
            });
            return updatedRecipe;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
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
ReviewsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            update_module_1.UpdateModule,
            check_module_1.CheckModule
        ]
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/check/:recipeId/:userId'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('recipeId')),
    (0, tslib_1.__param)(1, (0, common_1.Param)('userId')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CheckController.prototype, "check", null);
CheckController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('reviews'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof check_service_1.CheckService !== "undefined" && check_service_1.CheckService) === "function" ? _a : Object])
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
CheckModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [check_controller_1.CheckController],
        providers: [check_service_1.CheckService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const review = yield prisma_client_1.prisma.recipeReview.findFirst({
                where: {
                    recipeId: +recipeId,
                    authorId: +userId,
                }
            });
            return review;
        });
    }
};
CheckService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.RecipeReview !== "undefined" && client_1.RecipeReview) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('reviews'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newReview = yield prisma_client_1.prisma.recipeReview.create({
                data: Object.assign({}, review)
            });
            return newReview;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.RecipeReview !== "undefined" && client_1.RecipeReview) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('reviews'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
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
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedReview = yield prisma_client_1.prisma.recipeReview.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, review)
            });
            return updatedReview;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
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
ShoppingListModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            findAll_module_1.FindAllModule,
            deleteAll_module_1.DeleteAllModule,
            delete_module_1.DeleteModule
        ]
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _a : Object])
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
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const list = {
                recipeId: shoppinglist.recipeId,
                userId: +shoppinglist.userId,
                shoppingListItems: {
                    create: [
                        ...shoppinglist.ingredients
                    ]
                }
            };
            const newList = yield prisma_client_1.prisma.shoppingList.create({ data: list });
            return newList;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Delete)('all/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteAllController.prototype, "deleteAll", null);
DeleteAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof deleteAll_service_1.DeleteAllService !== "undefined" && deleteAll_service_1.DeleteAllService) === "function" ? _a : Object])
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
DeleteAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [deleteAll_controller_1.DeleteAllController],
        providers: [deleteAll_service_1.DeleteAllService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const shoppingLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId
                },
            });
            if (shoppingLists) {
                // delete shopping lists items first
                for (const list of shoppingLists) {
                    const count = yield prisma_client_1.prisma.shoppingListItem.deleteMany({
                        where: {
                            shoppingListId: +list.id
                        },
                    });
                    // then delete list
                    if (count) {
                        yield prisma_client_1.prisma.shoppingList.delete({
                            where: {
                                id: +list.id
                            },
                        });
                    }
                }
            }
            // check if all lists successfully deleted
            const checkLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId
                },
            });
            if (checkLists.length === 0) {
                return { res: 'success' };
            }
        });
    }
};
DeleteAllService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
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
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            // delete list items first
            const count = yield prisma_client_1.prisma.shoppingListItem.deleteMany({
                where: {
                    shoppingListId: id
                },
            });
            // then delete list
            if (count) {
                const deletedList = yield prisma_client_1.prisma.shoppingList.delete({
                    where: {
                        id
                    }
                });
                return deletedList;
            }
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "create", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
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
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const shoppingLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId
                },
                include: {
                    recipe: true,
                    shoppingListItems: true
                }
            });
            return shoppingLists;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Post)(':id/avatar'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateAvatarController.prototype, "updateAvatar", null);
UpdateAvatarController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('users'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof updateAvatar_service_1.UpdateAvatarService !== "undefined" && updateAvatar_service_1.UpdateAvatarService) === "function" ? _a : Object])
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
UpdateAvatarModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [updateAvatar_controller_1.UpdateAvatarController],
        providers: [updateAvatar_service_1.UpdateAvatarService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield prisma_client_1.prisma.user.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, avatar)
            });
            if (user) {
                const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                delete user.password;
                return Object.assign(Object.assign({}, user), { accessToken });
            }
        });
    }
};
UpdateAvatarService = (0, tslib_1.__decorate)([
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
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('users'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
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
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService]
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield prisma_client_1.prisma.user.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, userData)
            });
            const accessToken = yield jwt_1.Jwt.signAccessToken(user);
            delete user.password;
            return Object.assign(Object.assign({}, user), { accessToken });
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
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
UsersModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            update_module_1.UpdateModule,
            updateAvatar_module_1.UpdateAvatarModule
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/utils/jwt.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jwt = void 0;
const tslib_1 = __webpack_require__("tslib");
const dotenv_1 = (0, tslib_1.__importDefault)(__webpack_require__("dotenv"));
const jwt = (0, tslib_1.__importStar)(__webpack_require__("jsonwebtoken"));
const http_errors_1 = (0, tslib_1.__importDefault)(__webpack_require__("http-errors"));
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

/***/ "cookie-parser":
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "csurf":
/***/ ((module) => {

module.exports = require("csurf");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express-session":
/***/ ((module) => {

module.exports = require("express-session");

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

/***/ "multer":
/***/ ((module) => {

module.exports = require("multer");

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
const helmet_1 = (0, tslib_1.__importDefault)(__webpack_require__("helmet"));
const csurf_1 = (0, tslib_1.__importDefault)(__webpack_require__("csurf"));
const cookie_parser_1 = (0, tslib_1.__importDefault)(__webpack_require__("cookie-parser"));
const express_session_1 = (0, tslib_1.__importDefault)(__webpack_require__("express-session"));
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
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        // set api prefix
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        // set http headers to prevent security vulnerabilites
        app.use((0, helmet_1.default)());
        // enable cors origin between apps
        app.enableCors();
        // protection against csurf attacks
        app.use((0, cookie_parser_1.default)());
        app.use((0, express_session_1.default)({
            secret: 'ultrasecresessionpassword',
            resave: false,
            saveUninitialized: false,
        }));
        app.use((0, csurf_1.default)());
        app.use('*', function (req, res) {
            res.cookie('XSRF-TOKEN', req.csrfToken());
        });
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