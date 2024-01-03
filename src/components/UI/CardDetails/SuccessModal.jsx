import { Box, Modal } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

export default function SuccessModal({ open, handleClose, style, data, totalPrice, taxPrice, getValues }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <ReactJson
          src={{
            ...getValues(),
            totalPrice: totalPrice,
            taxPrice: taxPrice,
            totalPriceWithTax: totalPrice + taxPrice,
            products: data,
          }}
          theme="monokai"
          style={{
            padding: "20px",
          }}
        />
      </Box>
    </Modal>
  );
}
