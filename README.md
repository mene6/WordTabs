# WordTabs CMS

### General CLI Commands

## Artisan

Artisan commands use a namespaced prefixes for common operations
(example: `cache:clear`).

```sh
# Get a list of all commands in artisan
php artisan
```

```sh
# Launch server
php artisan serve
```

```sh
# Show Database tables in CLI
php artisan db:show
```

```sh
# Drop Tables and Migrate
php artisan migrate:refresh
```

## Vite Commands

The Frontend and CMS are built with React + Shadcn and Vite as built tool.

```sh
# Run Local Development
npm run dev
```

```sh
# Create production build
npm run build
```

## Composer

```sh
# Rebuild Server
composer dump-autoload
```

## Custom Directives

`app/Helper/helpers.php`
| Function | Directive | Parameters | Description |
| ----------- | --------- | --------------------- | ----------------------------------------------------- |
| `wt__merge` | `@wtm` | _$attributes, string_ | Helper to merge attributes with user defined classes. |
| | | | |

## Notes

### Noticable Benefits of building a CMS with Laravel Jetstream

-   Build in Auth and User system
-   Build in create and edit Teams
-   The freedom to use .php files within the app directory alongside `Laravel's Blade` templating engine.
-   Register Helpers easily within the Blade templating engine (similar to hooks) called Blade Directives, and call them with shorthand `@` throughout the codebase
-   `@php` directive allows you to use native php inside templating files, executing php logiv without registering it to Blade Directives.
-   Comes out-of-box with `Eloquent`, a php based ORM that makes it really easy to interact with Databases
-   Using Saloon v3 to quickly create API endpoints.
