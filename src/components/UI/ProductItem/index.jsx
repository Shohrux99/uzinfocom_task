import { Box, Modal } from "@mui/material";
import { removeCartItem, updateCartItem } from "db/idb";
import { useState } from "react";
import styles from "./styles.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { styleModalDetail } from "constants/modalStyles";

export default function ProductItem({ item, fetchData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addQty = () => {
    updateCartItem(item?.productId, {
      ...item,
      quantity: item.quantity + 1,
    }).then(() => {
      fetchData();
    });
  };

  const removeQty = () => {
    if (item.quantity === 1) {
      return;
    } else {
      updateCartItem(item?.productId, {
        ...item,
        quantity: item.quantity - 1,
      }).then(() => {
        fetchData();
      });
    }
  };

  const removeItem = () => {
    removeCartItem(item.productId).then(() => {
      fetchData();
      toast.success("Successfully removed from cart!");
    });
  };

  return (
    <div className={styles.wrapper}>
      <Toaster />
      <div className={styles.item}>
        <div className={styles.image} onClick={handleOpen}>
          <img src={item?.image} alt="" />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{item?.name}</h2>
          <p className={styles.additionDescription}>{item?.desc}</p>
        </div>

        <div className={styles.quantity}>
          <span className={styles.number}>{item?.quantity}</span>

          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.up}`} onClick={addQty} />
            <button className={`${styles.button} ${styles.down}`} onClick={removeQty} />
          </div>
        </div>

        <div className={styles.price}>
          <span className={styles.number}>$ {item?.price * item?.quantity}</span>
        </div>

        <div className={styles.remove}>
          <button onClick={removeItem}>
            <img src="./images/trash.svg" alt="" />
          </button>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styleModalDetail}>
          <div className={styles.productInfo}>
            <div className={styles.image}>
              <img src={item?.image} alt="" />
            </div>

            <div className={styles.content}>
              <h2 className={styles.title}>{item?.name}</h2>
              <p className={styles.additionDescription}>{item?.desc}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
