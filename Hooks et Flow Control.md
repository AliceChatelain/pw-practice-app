Parfait ! Voici une **documentation complète sur les Hooks et le contrôle de flux dans Playwright**, avec exemples de code pour que ce soit clair et pratique.

---

# **Playwright – Hooks et Flow Control**

Les **hooks** et le **flow control** permettent de structurer vos tests, gérer la préparation et le nettoyage, et contrôler l’exécution des tests dans Playwright.

---

## **1️⃣ Hooks dans Playwright**

Les hooks sont des fonctions qui s’exécutent **avant ou après un ou plusieurs tests**. Ils permettent de :

* Initialiser des données ou des pages.
* Nettoyer des éléments après un test.
* Configurer le contexte ou l’état global pour vos tests.

---

### **1.1 Principaux hooks**

| Hook         | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| `beforeAll`  | S’exécute **une seule fois avant tous les tests** d’un `describe`. |
| `afterAll`   | S’exécute **une seule fois après tous les tests** d’un `describe`. |
| `beforeEach` | S’exécute **avant chaque test**.                                   |
| `afterEach`  | S’exécute **après chaque test**.                                   |

---

### **1.2 Exemple avec hooks**

```ts
import { test, expect } from '@playwright/test';

test.describe('Fonctionnalité Login', () => {

  test.beforeAll(async ({ browser }) => {
    console.log('Avant tous les tests : initialisation globale');
  });

  test.afterAll(async () => {
    console.log('Après tous les tests : nettoyage global');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com/login');
    console.log('Avant chaque test : navigation vers la page login');
  });

  test.afterEach(async ({ page }) => {
    console.log('Après chaque test : actions de nettoyage si nécessaire');
  });

  test('Login avec email valide', async ({ page }) => {
    await page.fill('#email', 'user@example.com');
    await page.fill('#password', 'password123');
    await page.click('button#login');
    await expect(page).toHaveURL('https://example.com/dashboard');
  });

});
```

---

## **2️⃣ Flow Control (Contrôle de flux)**

Le **flow control** en Playwright consiste à gérer **l’ordre d’exécution**, **les conditions** et **la répétition** de tests ou d’actions.

### **2.1 Contrôle des tests**

#### **2.1.1 Exécution conditionnelle avec `test.skip` ou `test.only`**

```ts
// Ne pas exécuter ce test
test.skip('Test en développement', async ({ page }) => {
  // code
});

// Exécuter uniquement ce test
test.only('Test critique', async ({ page }) => {
  // code
});
```

---

#### **2.1.2 Tests paramétrés (Data-Driven Tests)**

```ts
const users = [
  { email: 'user1@example.com', password: 'pass1' },
  { email: 'user2@example.com', password: 'pass2' }
];

for (const user of users) {
  test(`Login pour ${user.email}`, async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#email', user.email);
    await page.fill('#password', user.password);
    await page.click('button#login');
    await expect(page).toHaveURL('https://example.com/dashboard');
  });
}
```

---

### **2.2 Contrôle d’actions**

#### **2.2.1 Attente d’éléments (wait)**

```ts
await page.waitForSelector('#loading', { state: 'hidden' }); // Attendre que le loading disparaisse
await page.waitForTimeout(2000); // Pause fixe de 2 secondes
```

---

#### **2.2.2 Gestion des erreurs (try/catch)**

```ts
try {
  await page.click('#button-danger');
} catch (error) {
  console.log('Échec du clic :', error);
}
```

---

### **2.3 Flow parallèle ou séquentiel**

* **Parallèle** : les tests s’exécutent en même temps (rapide pour CI/CD)

```ts
test.describe.parallel('Tests parallèles', () => {
  test('Test A', async ({ page }) => { /* ... */ });
  test('Test B', async ({ page }) => { /* ... */ });
});
```

* **Séquentiel** : les tests s’exécutent dans l’ordre défini

```ts
test.describe.serial('Tests séquentiels', () => {
  test('Test A', async ({ page }) => { /* ... */ });
  test('Test B', async ({ page }) => { /* ... */ });
});
```

---

## **3️⃣ Bonnes pratiques Hooks & Flow Control**

1. **Utiliser `beforeAll` pour les actions lourdes**, comme se connecter une fois.
2. **Utiliser `beforeEach` pour réinitialiser l’état de la page**.
3. **Limiter l’usage de `test.only` en CI/CD**, sinon les autres tests ne s’exécutent pas.
4. **Gérer les temps d’attente dynamiquement** avec `waitForSelector` plutôt que des pauses fixes.
5. **Paralléliser les tests indépendants** pour gagner du temps.

---

Si tu veux, je peux te créer **une version combinée avec “Structure des tests + Hooks + Flow Control”** en **mémo PDF avec tous les codes prêts à copier**. Ce serait un vrai guide Playwright complet.

Veux‑tu que je fasse ça ?
