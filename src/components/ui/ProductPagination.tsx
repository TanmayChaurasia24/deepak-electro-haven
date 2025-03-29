
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const ProductPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: ProductPaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  // Calculate visible page numbers
  const getVisiblePages = () => {
    // Show a maximum of 5 page numbers
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If we're near the beginning
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    }

    // If we're near the end
    if (currentPage >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // In the middle
    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`${className} scroll-reveal`}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className={`rounded-lg ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>

          {visiblePages.map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink
                onClick={() => onPageChange(pageNum)}
                isActive={currentPage === pageNum}
                className={`rounded-lg ${
                  currentPage === pageNum
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : ""
                }`}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={`rounded-lg ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
            >
              Next
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
