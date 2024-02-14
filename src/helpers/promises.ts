export const sleep = async (ms?: number) => new Promise((r) => setTimeout(r, ms || Math.random() * 10000));
