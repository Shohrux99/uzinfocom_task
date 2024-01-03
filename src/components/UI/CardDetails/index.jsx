import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Button, Divider } from "@mui/material";
import taxDb, { getTaxPrice, setDefaultTaxPrice } from "db/taxDb";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import SuccessModal from "./SuccessModal";
import styles from "./styles.module.scss";
import { payingTypes } from "constants/paymentTypes";
import { styleModalSuccess } from "constants/modalStyles";

export default function CardDetails({ data }) {
  const [taxPrice, setTaxPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      typePayment: "mastercard",
    },
  });
  const selectedTypePayment = watch("typePayment");

  useEffect(() => {
    getTaxPrice().then((res) => {
      if (res === null) {
        setDefaultTaxPrice();
      } else {
        setTaxPrice(res);
      }
    });
  }, []);

  const totalPrice = useMemo(() => {
    return data?.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);
  }, [data]);

  const onSubmit = (data) => {
    console.log(data);
    handleOpen();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.cardWrapper}>
        <div className={styles.head}>
          <h2>Cart Details</h2>

          <div className={styles.avatar}>
            <img src="/images/avatar.jpeg" alt="avatar" />
          </div>
        </div>

        <div className={styles.cardTypes}>
          <div className={styles.title}>
            <h3>Card type</h3>
          </div>

          <div className={styles.types}>
            {payingTypes.map((item) => (
              <div className={`${styles.type} ${item?.value === selectedTypePayment && styles.active}`} onClick={() => setValue("typePayment", item?.value)}>
                <div className={styles.image}>
                  <img src={item?.image} alt={item?.name} />
                </div>
              </div>
            ))}

            <div className={styles.type}>
              <div className={styles.seeMoreButton}>See more</div>
            </div>
          </div>
        </div>

        <div className={styles.nameOfCard}>
          <div className={styles.title}>
            <h3>Name on card</h3>
          </div>

          <div className={styles.input}>
            <input type="text" placeholder="Name" {...register("name", { required: true, minLength: 3 })} />
            {errors?.name && <span className={styles.error}>This field is required</span>}
          </div>
        </div>

        <div className={styles.cardNumber}>
          <div className={styles.title}>
            <h3>Card number</h3>
          </div>

          <div className={styles.input}>
            <ReactInputMask mask="9999-9999-9999-9999" placeholder="1111-2222-3333-4444" {...register("cardNumber", { required: true })} />
            {errors?.cardNumber && <span className={styles.error}>This field is required</span>}
          </div>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.exDate}>
            <div className={styles.title}>
              <h3>Expiry date</h3>
            </div>

            <div className={styles.input}>
              <ReactInputMask mask="99/99" placeholder="mm/yy" {...register("exDate", { required: true })} />
              {errors?.exDate && <span className={styles.error}>This field is required</span>}
            </div>
          </div>

          <div className={styles.cvv}>
            <div className={styles.title}>
              <h3>CVV</h3>
            </div>

            <div className={styles.input}>
              <ReactInputMask mask="9999" placeholder="1234" {...register("cvv", { required: true })} />
              {errors?.cvv && <span className={styles.error}>This field is required</span>}
            </div>
          </div>
        </div>

        <Divider />

        <div className={styles.totalInfo}>
          <div className={styles.wrap}>
            <h3>Subtotal</h3>
            <p>$ {totalPrice}</p>
          </div>

          <div className={styles.wrap}>
            <h3>Shipping</h3>
            <p>$ {taxPrice}</p>
          </div>

          <div className={styles.wrap}>
            <h3>Total (Tax incl.)</h3>
            <p>$ {(totalPrice + taxPrice).toFixed(2)}</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button disabled={!data?.length} type="submit">
            <span>${(totalPrice + taxPrice).toFixed(2)}</span>

            <span>
              Checkout
              <EastRoundedIcon />
            </span>
          </Button>
        </div>
      </div>

      <SuccessModal open={open} handleClose={handleClose} style={styleModalSuccess} data={data} totalPrice={totalPrice} taxPrice={taxPrice} getValues={getValues} />
    </form>
  );
}
