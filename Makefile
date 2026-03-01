SHELL := /bin/bash
COMPOSE := docker compose -f docker-compose.dev.yml

.PHONY: up down logs build lint storybook demo shell-demo shell-storybook clean

# ── Stack ──────────────────────────────────────────────────────────────────────
up:
	$(COMPOSE) up -d
	@echo "✅ Demo:      http://localhost:5173"
	@echo "✅ Storybook: http://localhost:6006"

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f

restart:
	$(COMPOSE) restart

build:
	$(COMPOSE) build

# ── Quality ────────────────────────────────────────────────────────────────────
lint:
	$(COMPOSE) exec demo npm run lint
	$(COMPOSE) exec demo npm run lint:css
	$(COMPOSE) exec demo npm run lint:format

storybook-build:
	$(COMPOSE) run --rm storybook npm run build-storybook

# ── Dev helpers ────────────────────────────────────────────────────────────────
shell-demo:
	$(COMPOSE) exec demo sh

shell-storybook:
	$(COMPOSE) exec storybook sh

# ── Cleanup ────────────────────────────────────────────────────────────────────
clean:
	$(COMPOSE) down -v
	rm -rf packages/react/node_modules demo/node_modules .storybook/node_modules
