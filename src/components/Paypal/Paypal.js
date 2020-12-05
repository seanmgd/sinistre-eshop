import React from 'react'

export function Paypal({ total }) {
  const paypal = React.useRef()

  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'EUR',
                  value: total,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          await actions.order.capture()
        },
        onError: () => {},
      })
      .render(paypal.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div ref={paypal} />
    </div>
  )
}
