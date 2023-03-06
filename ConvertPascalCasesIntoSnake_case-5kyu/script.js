function toUnderscore(string) {
  return String(string).replace(/(?<!^)(?=[A-Z])/g, "_").toLowerCase();
}

