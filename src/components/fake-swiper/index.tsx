import React from 'react'

function FakeSwiper(props: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-scroll h-screen">
      {props.children}
    </div>
  )
}

export default React.forwardRef(FakeSwiper)
