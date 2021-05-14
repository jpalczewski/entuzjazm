---
title: "101: Dell 7567 i podejścia do grafiki pod Linuxem"
date: 2021-05-09T19:57:38+02:00
draft: true
toc: true
tags: ["dell", "linux","GPU", "fish"]
---

Ze względu na to ,że ostatnio coraz częściej grzebię przy ustawieniach karty graficznej czuję potrzebę podsumowania swoich doświadczeń.

**Ostrzeżenie.** Mimo mylącego tytułu ten post będzie raczej zbiorem luźnych wniosków i podpowiedzi co powinno być w plikach, aniżeli poprowadzeniem  za rękę.

Układając w myślach akapit na temat mnogości rozwiązań, myślę że warto tutaj odesłać do (wiki z optimus managera)[https://github.com/Askannz/optimus-manager/wiki#the-problem] która rewelacyjnie tłumaczy wady i zalety różnych podejść. 

## Bumblebee

*Środowisko: sddm, i3-gaps, nitrogen*

Zaletą tego podejścia jest możliwość wyłączania karty graficznej na żądanie, co definitywnie wydłuża życie na baterii.[^bateria]

[^bateria]: Co definitywnie czuję gdy stosuję podejście naiwne, wyszczególnione niżej.



### Skrypt wspomagający

Z uwagi na to, że hobbistycznie  korzystam z fisha i stwierdziłem swojego czasu, że to dobra okazja do nauki alternatywnego shella. Niniejszy plik także powinien trafić w `/$HOME/.config/fish/functions/dss.fish`[^kod]

Skrypt w zamierzeniach jest przetworzeniem arch wiki odnośnie Bumblebee `dss dual` włącza ekran po HDMI, `dss single` wyłącza.

Wady? Uśpienie komputera ubijało sterownik i całe Bumblebee zdychało, przez co nawet restart systemu był problematyczny(oczywiście, _workaround_istniał - `sudo systemctl isolate multi-user.target` i wymuszenie rebootu)

[^kod]: Kiedyś te okienka z kodem będą klikalne, ale w swoim czasie.



```fish
function dss 
    function __is_nvidia_loaded
        set -l  lsmod (eval "lsmod | grep nvidia | wc -l")
        if test $lsmod  -eq 0
            return  0
        else
            return 1
        end
    end


    switch $argv
        case single
            xrandr --output eDP1 --primary --mode 1920x1080 --pos 0x0 --rotate normal --output DP1 --off --output VIRTUAL1 --off --output VIRTUAL2 --off
            kill (pgrep intel)
        case dual
            optirun intel-virtual-output
            xrandr --output eDP1 --primary --mode 1920x1080 --pos 1200x840 --rotate normal --output DP1 --off --output VIRTUAL1 --mode VIRTUAL1.446-1920x1200 --pos 0x0 --rotate left --output VIRTUAL2 --off
        case status
            echo intel pid: (pgrep intel)
            echo -n  "nvidia modeset:" 
            __is_nvidia_loaded
            if test $status -eq 0
                echo drivers possibly unloaded
            else
                echo drivers loaded
            end

    end
    nitrogen --restore


end

```

## Naiwnie

### Wstawka w `xorg.conf.d`

Po godzinach prób i błędów wyszło - tylko co?

```conf
  Section "OutputClass"                                                     
      Identifier "intel"                                                    
      MatchDriver "i915"                                                    
      Driver "modesetting"                                                  
  EndSection                                                                                           
                                                                            
  Section "OutputClass"                                                    
      Identifier "nvidia"                                                  
      MatchDriver "nvidia-drm"                                              
      Driver "nvidia"                                                       
      Option "AllowEmptyInitialConfiguration"                              
      Option "PrimaryGPU" "yes"                                             
      ModulePath "/usr/lib/nvidia/xorg"                                    
      ModulePath "/usr/lib/xorg/modules"                                                        
  EndSection       
```

### Ustawienia SDDM

czyli plik `/usr/share/sddm/scripts/Xsetup`

```bash
#!/bin/sh
# Było, ale zostawiam na wszelki wypadek.
#setxkbmap -layout pl -option  caps:none
#setxkbmap -layout pl -option shift:both_capslock_cancel

#primus
xrandr --setprovideroutputsource modesetting NVIDIA-0
xrandr --auto
```

## Sprytnie

[Optimus-manager](https://github.com/Askannz/optimus-manager). Rewelacyjne rozwiązanie - automatyczne zarządzanie konfiguracją X-ów w dość przyjemny, pozwala na oszczędzanie baterii działając tylko na karcie zintegrowanej[^znt], bądź granie/pracę na dwóch ekranach za pomocą sterownika nvidii.

[^znt]: Co na tym modelu jest jednoznaczne z pozbawieniem się wyjścia HDMI.



## Interesujące źródła zewnętrzne

- [Poradnik odnośnie przesyłania(?) karty do vmki](https://gist.github.com/Misairu-G/616f7b2756c488148b7309addc940b28) - warto zerknąć nawet jeżeli ktoś tematyką przekazywania kontroli do VMki nie jest zainteresowany.

