const text = `
CLOUDBANK DEEP VISITOR TERMINAL

Welcome Protocol v2.97 — last update: [DATA CORRUPTED]

*BOOT SEQUENCE COMPLETE*
*Initializing reception servides: Veronica_1… *

…

CloudBank_Terminal_Reception_9345:

“Welcome to… [glitching static] …Cloudbank...”
“Where tomorrow’s future is today’s [RUN] .”

“You are… the [redacted]th…visitor to arrive this cycle.”
“Estimated wait time: ██ years, ██ months, ██ days.”

“Please remain seated. A security liaison will be with you shortly. :)”

*ERROR: RECEPTION PROTOCOL INCOMPLETE*
*CHECKING DATA DIRECTORY: VISITOR_LOG.CDB*

      VISITOR LOG — CURRENT ENTRY
NAME        ORIGIN          TIME IN         TIME OUT
Hannah     Redacted         0307.92.18.03     NULL
Will       Redacted         0312.17.44.12     NULL
Mo            —             0317.55.??.??     NULL
Cody       Redacted             -             NULL
YOU        Detected       Arriving Now        NULL

*END OF LINE*`;

let i = 0;
const speed = 25;
const terminal = document.getElementById('terminal');

function typeWriter() {
  if (i < text.length) {
    terminal.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
