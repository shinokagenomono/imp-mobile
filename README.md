# IMP Mobile (Android PWA)

Mobilní okno do stejných poznámek a úkolů jako v IMP Master na PC. Čte i zapisuje soubory ve složce „IMP Master“ na Google Drive (`poznamky.txt`, `notes.json`, `done_log.json`). Žádný server, žádné upozornění na pozadí.

## Nasazení (GitHub Pages)

1. Na GitHubu vytvoř veřejný repozitář (např. `imp-mobile`) a nahraj do něj všech 8 souborů z této složky.
2. Settings → Pages → Branch `main`, složka `/ (root)`. Adresa bude `https://TVUJ-UCET.github.io/imp-mobile/`.
3. Google Cloud (stejný projekt jako IMP Master) → Google Auth platform → Clients → Create client → typ **Web application**.
   - Authorized JavaScript origins: `https://TVUJ-UCET.github.io` (bez cesty a bez lomítka na konci).
   - Zkopíruj Client ID.
4. Do `config.js` vlož Client ID místo `VLOZ-SEM-CLIENT-ID...` a soubor znovu nahraj na GitHub.
5. Zkontroluj, že tvůj Google účet je v Audience → Test users.
6. Na Androidu otevři adresu v Chrome, přihlas se, pak menu ⋮ → **Přidat na plochu**.

## Omezení

- Projekt je v režimu Testing: přihlášení vyprší cca po 7 dnech, pak stačí znovu klepnout na Přihlásit.
- Aplikace používá plný scope `drive` (stejně jako desktop, kvůli sdílení souborů s IMP Master). Přístupový token je jen v sessionStorage, po zavření se ztratí.
- Bez internetu aplikace neukáže data (service worker cachuje jen kostru aplikace).
- Při souběžné úpravě stejné poznámky na PC i v mobilu vyhrává novější `updated`.
