Parfait ! Je vais te faire une **doc complète sur la structure des tests Playwright**, avec des exemples de code les plus utilisés. Je vais organiser ça clairement pour que tu puisses t’y référer facilement.

---

# **Playwright – Structure des Tests**

Playwright est un framework pour l’écriture de tests **end-to-end (E2E)**. Il utilise TypeScript/JavaScript et fournit des fonctions pour naviguer dans le navigateur, interagir avec les éléments, et vérifier des résultats.

---

## **1️⃣ Structure d’un projet Playwright**

Un projet Playwright typique contient :

```
pw-tests/
├─ tests/           # Dossier pour vos fichiers de test
│   ├─ example.spec.ts
├─ playwright.config.ts  # Configuration globale des tests
├─ package.json
```

---

### **2️⃣ Exemple de configuration (`playwright.config.ts`)**

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',          // Dossier des tests
  timeout: 30 * 1000,          // Timeout par test
  retries: 1,                  // Nombre de retries si échec
  use: {
    headless: false,           // Exécuter avec ou sans UI
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,       // Timeout pour actions comme click/fill
    ignoreHTTPSErrors: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

---

## **3️⃣ Structure d’un test (`example.spec.ts`)**

Playwright utilise la syntaxe **`test` et `expect`** :

```ts
import { test, expect } from '@playwright/test';

test.describe('Page d’accueil', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com'); // Naviguer avant chaque test
  });

  test('Le titre est correct', async ({ page }) => {
    await expect(page).toHaveTitle('Example Domain');
  });

  test('Le lien "More information" est visible', async ({ page }) => {
    const link = page.locator('a');
    await expect(link).toBeVisible();
    await expect(link).toHaveText('More information...');
  });

});
```

### **Explications**

* `test.describe()` → Regroupe plusieurs tests pour une fonctionnalité.
* `test.beforeEach()` → Code exécuté avant chaque test.
* `test()` → Définit un test individuel.
* `page.goto(url)` → Navigue vers une URL.
* `locator(selector)` → Sélecteur pour interagir avec un élément.
* `expect()` → Assertions pour vérifier les résultats.

---

## **4️⃣ Actions les plus utilisées**

| Action                   | Exemple                                                        |
| ------------------------ | -------------------------------------------------------------- |
| Click                    | `await page.click('button#submit');`                           |
| Remplir un input         | `await page.fill('#email', 'test@example.com');`               |
| Vérifier texte           | `await expect(page.locator('h1')).toHaveText('Bienvenue');`    |
| Vérifier visibilité      | `await expect(page.locator('.modal')).toBeVisible();`          |
| Sélection dans un select | `await page.selectOption('select#country', 'FR');`             |
| Attendre un élément      | `await page.waitForSelector('#loading', { state: 'hidden' });` |

---

## **5️⃣ Tests avancés**

### **5.1 Capturer une capture d’écran**

```ts
await page.screenshot({ path: 'screenshot.png', fullPage: true });
```

### **5.2 Prendre des vidéos**

```ts
await page.video().start();
```

### **5.3 Paramètres dynamiques avec `test.describe.parallel`**

```ts
test.describe.parallel('Tests parallèles', () => {
  test('Test 1', async ({ page }) => { /* ... */ });
  test('Test 2', async ({ page }) => { /* ... */ });
});
```

---

## **6️⃣ Commandes utiles**

* Lancer tous les tests :

```bash
npx playwright test
```

* Lancer un test spécifique :

```bash
npx playwright test tests/example.spec.ts
```

* Lancer en mode interactif avec UI :

```bash
npx playwright test --ui
```

* Réinstaller les navigateurs Playwright :

```bash
npx playwright install
```

---

## **7️⃣ Bonnes pratiques**

1. **Séparer les tests par fonctionnalités** dans différents fichiers.
2. **Utiliser `beforeEach`** pour éviter la répétition du code.
3. **Utiliser des sélecteurs robustes** (`data-testid`) pour éviter que les changements CSS cassent vos tests.
4. **Exécuter les tests en mode headless pour CI/CD**, mais tester localement avec UI pour déboguer.

---

Si tu veux, je peux te faire **une version “mémo PDF” prête à imprimer** avec **tous les codes les plus utilisés et raccourcis Playwright** pour que tu aies une doc complète sous la main.

Veux‑tu que je fasse ça ?
