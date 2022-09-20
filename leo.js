/*public class pythagoras{
	public static void main (String[] arg) {
	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
	double c = Math.sqrt(a*a + b*b);
	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
	}
}
*/

const a = document.querySelector('#input-field');
const b = document.querySelector('#input-field2');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let a2 = parseInt(a.value);
    let b2 = parseInt(b.value);
    let c = Math.sqrt(a2*a2 + b2*b2);
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Hypotenusan är ${c} cm`;
    messageBox.appendChild(message);
});