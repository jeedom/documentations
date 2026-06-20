#!/usr/bin/env bash
# fix-case-collisions.sh
#
# Corrige 76 collisions de noms de fichiers qui ne diffèrent que par la
# casse (ex: Innr.RB_165.png vs innr.RB_165.png). Sur un filesystem
# sensible à la casse (Linux/macOS) les deux fichiers cohabitent sans
# souci, mais sur Windows/NTFS (insensible à la casse par défaut) ils
# pointent vers le même fichier physique : Git ne peut jamais réconcilier
# ça, d'où les fichiers "modifiés" fantômes qui reviennent après un stash.
#
# Tous les doublons ont un contenu strictement identique (vérifié par hash),
# donc ce script SUPPRIME le doublon inutile (pas de mv) et corrige les
# 8 références markdown qui pointaient sur la version supprimée.
#
# IMPORTANT : exécuter ce script depuis un environnement à filesystem
# sensible à la casse (WSL2/ext4, Linux, macOS en mode case-sensitive).
# Sous Git Bash/Windows natif (NTFS), les deux chemins d'une même paire
# se résolvent vers le même fichier sur disque et `git rm` peut se tromper
# de cible. Le plus sûr : `wsl --install` puis cloner et lancer ce script
# dans WSL, ou utiliser ce script tel quel sur GitHub Codespaces/Linux CI.

set -euo pipefail

if [ ! -d .git ]; then
  echo "Lance ce script depuis la racine du clone (dossier contenant .git)." >&2
  exit 1
fi

echo "Création de la branche fix/case-collisions..."
git checkout -b fix/case-collisions

echo "Suppression des 76 doublons orphelins (case-insensitive collisions)..."
FILES=(
  "de_DE/plugins/wellness/thermostat/beta/images/thermostatcommandesscenario.PNG"
  "de_DE/plugins/wellness/thermostat/beta/images/thermostatlistecommandes.PNG"
  "de_DE/plugins/wellness/thermostat/images/thermostatcommandesscenario.PNG"
  "de_DE/plugins/wellness/thermostat/images/thermostatlistecommandes.PNG"
  "de_DE/zigbee/images/ADEO.LDSENK01F.png"
  "de_DE/zigbee/images/ADEO.LDSENK02F.png"
  "de_DE/zigbee/images/Innr.AE_260.png"
  "de_DE/zigbee/images/Innr.FL_140_C.png"
  "de_DE/zigbee/images/Innr.OFL_140_C.png"
  "de_DE/zigbee/images/Innr.OSL_130_C.png"
  "de_DE/zigbee/images/Innr.RB_165.png"
  "de_DE/zigbee/images/Innr.RB_250_C.png"
  "de_DE/zigbee/images/Innr.RB_265.png"
  "de_DE/zigbee/images/Innr.RB_278_T.png"
  "de_DE/zigbee/images/Innr.RB_285_C.png"
  "de_DE/zigbee/images/Innr.RF_263.png"
  "de_DE/zigbee/images/Innr.RS_230_C.png"
  "de_DE/zigbee/images/Innr.SP_120.png"
  "en_US/plugins/wellness/thermostat/beta/images/thermostatcommandesscenario.PNG"
  "en_US/plugins/wellness/thermostat/beta/images/thermostatlistecommandes.PNG"
  "en_US/plugins/wellness/thermostat/images/thermostatcommandesscenario.PNG"
  "en_US/plugins/wellness/thermostat/images/thermostatlistecommandes.PNG"
  "en_US/zigbee/images/ADEO.LDSENK01F.png"
  "en_US/zigbee/images/ADEO.LDSENK02F.png"
  "en_US/zigbee/images/Innr.AE_260.png"
  "en_US/zigbee/images/Innr.FL_140_C.png"
  "en_US/zigbee/images/Innr.OFL_140_C.png"
  "en_US/zigbee/images/Innr.OSL_130_C.png"
  "en_US/zigbee/images/Innr.RB_165.png"
  "en_US/zigbee/images/Innr.RB_250_C.png"
  "en_US/zigbee/images/Innr.RB_265.png"
  "en_US/zigbee/images/Innr.RB_278_T.png"
  "en_US/zigbee/images/Innr.RB_285_C.png"
  "en_US/zigbee/images/Innr.RF_263.png"
  "en_US/zigbee/images/Innr.RS_230_C.png"
  "en_US/zigbee/images/Innr.SP_120.png"
  "es_ES/plugins/wellness/thermostat/beta/images/thermostatcommandesscenario.PNG"
  "es_ES/plugins/wellness/thermostat/beta/images/thermostatlistecommandes.PNG"
  "es_ES/plugins/wellness/thermostat/images/thermostatcommandesscenario.PNG"
  "es_ES/plugins/wellness/thermostat/images/thermostatlistecommandes.PNG"
  "es_ES/zigbee/images/ADEO.LDSENK01F.png"
  "es_ES/zigbee/images/ADEO.LDSENK02F.png"
  "es_ES/zigbee/images/Innr.AE_260.png"
  "es_ES/zigbee/images/Innr.FL_140_C.png"
  "es_ES/zigbee/images/Innr.OFL_140_C.png"
  "es_ES/zigbee/images/Innr.OSL_130_C.png"
  "es_ES/zigbee/images/Innr.RB_165.png"
  "es_ES/zigbee/images/Innr.RB_250_C.png"
  "es_ES/zigbee/images/Innr.RB_265.png"
  "es_ES/zigbee/images/Innr.RB_278_T.png"
  "es_ES/zigbee/images/Innr.RB_285_C.png"
  "es_ES/zigbee/images/Innr.RF_263.png"
  "es_ES/zigbee/images/Innr.RS_230_C.png"
  "es_ES/zigbee/images/Innr.SP_120.png"
  "fr_FR/plugins/wellness/thermostat/beta/images/thermostatcommandesscenario.PNG"
  "fr_FR/plugins/wellness/thermostat/beta/images/thermostatlistecommandes.PNG"
  "fr_FR/plugins/wellness/thermostat/images/thermostatcommandesscenario.PNG"
  "fr_FR/plugins/wellness/thermostat/images/thermostatlistecommandes.PNG"
  "fr_FR/zigbee/images/ADEO.LDSENK01F.png"
  "fr_FR/zigbee/images/ADEO.LDSENK02F.png"
  "fr_FR/zigbee/images/Innr.AE_260.png"
  "fr_FR/zigbee/images/Innr.FL_140_C.png"
  "fr_FR/zigbee/images/Innr.OFL_140_C.png"
  "fr_FR/zigbee/images/Innr.OSL_130_C.png"
  "fr_FR/zigbee/images/Innr.RB_165.png"
  "fr_FR/zigbee/images/Innr.RB_250_C.png"
  "fr_FR/zigbee/images/Innr.RB_265.png"
  "fr_FR/zigbee/images/Innr.RB_278_T.png"
  "fr_FR/zigbee/images/Innr.RB_285_C.png"
  "fr_FR/zigbee/images/Innr.RF_263.png"
  "fr_FR/zigbee/images/Innr.RS_230_C.png"
  "fr_FR/zigbee/images/Innr.SP_120.png"
  "pt_PT/plugins/wellness/thermostat/beta/images/thermostatcommandesscenario.PNG"
  "pt_PT/plugins/wellness/thermostat/beta/images/thermostatlistecommandes.PNG"
  "pt_PT/plugins/wellness/thermostat/images/thermostatcommandesscenario.PNG"
  "pt_PT/plugins/wellness/thermostat/images/thermostatlistecommandes.PNG"
)
for f in "${FILES[@]}"; do
  if [ -e "$f" ] || git ls-files --error-unmatch "$f" >/dev/null 2>&1; then
    git rm -q -- "$f"
  else
    echo "  (déjà absent, ignoré) $f"
  fi
done

echo "Correction des 8 références markdown vers la version conservée..."
sed -i "s|images/ADEO.LDSENK01F.png|images/adeo.LDSENK01F.png|g" "de_DE/zigbee/equipement.compatible.md"
sed -i "s|images/ADEO.LDSENK02F.png|images/adeo.LDSENK02F.png|g" "de_DE/zigbee/equipement.compatible.md"
sed -i "s|images/ADEO.LDSENK01F.png|images/adeo.LDSENK01F.png|g" "en_US/zigbee/equipement.compatible.md"
sed -i "s|images/ADEO.LDSENK02F.png|images/adeo.LDSENK02F.png|g" "en_US/zigbee/equipement.compatible.md"
sed -i "s|images/ADEO.LDSENK01F.png|images/adeo.LDSENK01F.png|g" "es_ES/zigbee/equipement.compatible.md"
sed -i "s|images/ADEO.LDSENK02F.png|images/adeo.LDSENK02F.png|g" "es_ES/zigbee/equipement.compatible.md"
sed -i "s|images/ADEO.LDSENK01F.png|images/adeo.LDSENK01F.png|g" "fr_FR/zigbee/equipement.compatible.md"
sed -i "s|images/ADEO.LDSENK02F.png|images/adeo.LDSENK02F.png|g" "fr_FR/zigbee/equipement.compatible.md"

echo "Vérification : plus aucune collision de casse..."
COLLISIONS=$(git ls-files | awk '{print tolower($0)}' | sort | uniq -d | wc -l)
echo "Collisions restantes: $COLLISIONS"
if [ "$COLLISIONS" -ne 0 ]; then
  echo "ATTENTION : des collisions subsistent, vérifie manuellement avant de committer." >&2
fi

git add -A
git status --short

echo
echo "Prêt à committer, par exemple :"
echo '  git commit -m "Fix case-only filename collisions breaking Windows checkouts"'
echo "Puis push et ouvre la PR :"
echo '  git push -u origin fix/case-collisions'
