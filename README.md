# IMP Mobile (Android PWA) – úkoly

Mobilní okno do stejných úkolů jako IMP Master na PC a o-io. Čte a zapisuje `board.json` ve složce
„IMP sdílené“ na Google Disku (zakládá ji IMP: Google účty → Sdílení s o-io). Poznámky a skici v souboru
nechává beze změny. Úkol má stejná pole jako v IMPu: název, stav, projekt, priorita, popis, podúkoly.
Žádný server, žádné upozornění na pozadí.

## Nasazení (GitHub Pages)

1. Soubory nahraj do repozitáře `imp-mobile` (větev `main`, kořen). Pages: Settings → Pages → Branch `main`, `/ (root)`.
2. Google Cloud (projekt IMP Master) → Google Auth platform → Clients → klient typu **Web application**
   („IMP Mobile“). Authorized JavaScript origins: `https://shinokagenomono.github.io`.
3. Client ID je v `config.js`.
4. Na Androidu otevři adresu v Chrome, přihlas se, pak menu ⋮ → **Přidat na plochu**.

## Jak to funguje

- Obor `drive.file`: aplikace vidí jen soubory aplikací projektu IMP Master (složku „IMP sdílené“), ne zbytek Disku.
- Každá změna: načte čerstvý `board.json`, upraví jen dotčený úkol, ověří verzi souboru na Disku a teprve pak zapíše.
  Když mezitím zapsal IMP nebo o-io, změna se zopakuje nad novými daty – nic se nepřepíše.
- Přístupový token je jen v sessionStorage, po zavření se ztratí.
- Bez internetu aplikace neukáže data (service worker cachuje jen kostru aplikace).
