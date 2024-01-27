import { LAYOUT } from './config.js';

export default class TextEditor {
  constructor() {
    this.root = document.querySelector('#text-editor');
    this.root.innerHTML = LAYOUT;
    this.textarea = this.root.querySelector('.textarea');
    this.setupEventListeners();
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage = () => {
    const value = JSON.parse(localStorage.getItem('textEditorContent'));
    if (value) {
      this.textarea.style.fontSize = value.fontSize;
      this.textarea.style.fontWeight = value.fontWeight;
      this.textarea.style.textDecoration = value.textDecoration;
      this.textarea.style.textAlign = value.textAlign;
      this.textarea.style.textTransform = value.textTransform;
      this.textarea.style.color = value.color;
      this.textarea.value = value.text;
    }
  };

  saveToLocalStorage = () => {
    const value = {
      fontSize: window.getComputedStyle(this.textarea).fontSize,
      fontWeight: window.getComputedStyle(this.textarea).fontWeight,
      textDecoration: window.getComputedStyle(this.textarea).textDecoration,
      textAlign: window.getComputedStyle(this.textarea).textAlign,
      textTransform: window.getComputedStyle(this.textarea).textTransform,
      color: window.getComputedStyle(this.textarea).color,
      text: this.textarea.value,
    };
    localStorage.setItem('textEditorContent', JSON.stringify(value));
  };

  setupEventListeners() {
    this.root
      .querySelector('.btn-size')
      .addEventListener('click', this.changeFontSize);
    this.root
      .querySelector('.btn-bold')
      .addEventListener('click', this.toggleBold);
    this.root
      .querySelector('.btn-italic')
      .addEventListener('click', this.toggleItalic);
    this.root
      .querySelector('.btn-underline')
      .addEventListener('click', this.toggleUnderline);
    this.root
      .querySelector('.btn-align-left')
      .addEventListener('click', this.alignLeft);
    this.root
      .querySelector('.btn-align-center')
      .addEventListener('click', this.alignCenter);
    this.root
      .querySelector('.btn-align-right')
      .addEventListener('click', this.alignRight);
    this.root
      .querySelector('.btn-uppercase')
      .addEventListener('click', this.toggleUppercase);
    this.root
      .querySelector('.btn-reset')
      .addEventListener('click', this.resetTextStyles);
    this.root
      .querySelector('.btn-color')
      .addEventListener('input', this.changeTextColor);
    this.root
      .querySelector('.btn-download')
      .addEventListener('click', this.downloadFile);
    this.textarea.addEventListener('input', this.saveToLocalStorage);
  }

  changeFontSize = () => {
    const value = this.root.querySelector('.btn-size').value;
    this.textarea.style.fontSize = value + 'px';
  };

  toggleBold = () => {
    if (this.textarea.style.fontWeight === 'bold') {
      this.textarea.style.fontWeight = 'normal';
      this.root.querySelector('.btn-bold').classList.remove('active');
    } else {
      this.textarea.style.fontWeight = 'bold';
      this.root.querySelector('.btn-bold').classList.add('active');
    }
  };

  toggleItalic = () => {
    if (this.textarea.style.fontStyle === 'italic') {
      this.textarea.style.fontStyle = 'normal';
      this.root.querySelector('.btn-italic').classList.remove('active');
    } else {
      this.textarea.style.fontStyle = 'italic';
      this.root.querySelector('.btn-italic').classList.add('active');
    }
  };

  toggleUnderline = () => {
    if (this.textarea.style.textDecoration === 'underline') {
      this.textarea.style.textDecoration = 'none';
      this.root.querySelector('.btn-underline').classList.remove('active');
    } else {
      this.textarea.style.textDecoration = 'underline';
      this.root.querySelector('.btn-underline').classList.add('active');
    }
  };

  alignLeft = () => {
    this.textarea.style.textAlign = 'left';
  };

  alignCenter = () => {
    this.textarea.style.textAlign = 'center';
  };

  alignRight = () => {
    this.textarea.style.textAlign = 'right';
  };

  toggleUppercase = () => {
    if (this.textarea.style.textTransform === 'uppercase') {
      this.textarea.style.textTransform = 'none';
      this.root.querySelector('.btn-uppercase').classList.remove('active');
    } else {
      this.textarea.style.textTransform = 'uppercase';
      this.root.querySelector('.btn-uppercase').classList.add('active');
    }
  };

  resetTextStyles = () => {
    this.textarea.style.fontSize = '20px';
    this.textarea.style.fontWeight = 'normal';
    this.textarea.style.textAlign = 'left';
    this.textarea.style.fontStyle = 'normal';
    this.textarea.style.textTransform = 'capitalize';
    this.textarea.style.color = '#000000';
    this.textarea.value = '';
  };

  changeTextColor = () => {
    const value = this.root.querySelector('.btn-color').value;
    this.textarea.style.color = value;
  };

  downloadFile = () => {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(this.textarea.value)
    );
    element.setAttribute('download', 'file.txt');
    element.style.display = 'none';
    this.root.appendChild(element);
    element.click();
    this.root.removeChild(element);
  };
}

const textEditor = new TextEditor();
