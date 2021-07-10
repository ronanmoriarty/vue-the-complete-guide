export const stringMixin = {
    computed: {
        reverseFromMixin() {
            return this.text.split("").reverse().join("");
        },
        textWithLengthFromMixin() {
            return `${this.text} (${this.text.length})`;
        }
    }
};