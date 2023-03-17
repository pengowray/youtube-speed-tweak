#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
#MaxHotkeysPerInterval 200
; Send {WheelDown}

F15 & WheelUp::
    Send >
    Sleep, 10 
    return

F15 & WheelDown::
    Send <
    Sleep, 10 
    return

F16 & WheelUp::
    Send {.}
    Sleep, 10 
    return

F16 & WheelDown::
    Send {,}
    Sleep, 10 
    return


F15 & MButton::
F16 & MButton::
    Send {space}
    Sleep, 20
    return

;; TODO: require F-key before ctrl (how?)
F15 & Ctrl::
F16 & Ctrl::
    Send {left}
    Sleep, 20
    return
    
F15 & ScrollLock::
F16 & ScrollLock::
    Send {right}
    Sleep, 20
    return
