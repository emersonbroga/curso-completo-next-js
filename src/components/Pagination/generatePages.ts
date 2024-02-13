export const ELLIPSIS_LEFT = -1;
export const ELLIPSIS_RIGHT = -2;

export const generatePages = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }).map((_, i) => i + 1);
  }

  if (currentPage < 3) {
    return [1, 2, 3, ELLIPSIS_LEFT, totalPages - 1, totalPages];
  }

  if (currentPage > totalPages - 2) {
    return [1, 2, 3, ELLIPSIS_LEFT, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, ELLIPSIS_LEFT, currentPage - 1, currentPage, currentPage + 1, ELLIPSIS_RIGHT, totalPages];
};
