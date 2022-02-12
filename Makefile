up:
	docker compose up -d
down:
	docker compose down
build:
	docker compose build
app:
	docker compose exec app sh
yarn_start:
	docker compose exec app yarn start
yarn_build:
	docker compose exec app yarn build