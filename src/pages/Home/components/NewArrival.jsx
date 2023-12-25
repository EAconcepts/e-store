import React from 'react'
import { NavLink, Outlet } from 'react-router-dom/dist'
import underline from '../../../assets/underline.svg'

const NewArrival = () => {
  return (
    <section className=" flex flex-col px-1 items-center  mb-12">
        <h2 className=" uppercase text-center font-medium text-2xl tracking-wider ">
          New Arrival{" "}
        </h2>
        <img src={underline} alt="divider" className="" />
        <div className="flex flex-row w-full justify-around px-5 mt-4 text-slate-400 md:text-lg">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            All
          </NavLink>
          <NavLink
            to="/apparel"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Apparel
          </NavLink>
          <NavLink
            to="/dress"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Dress
          </NavLink>
          <NavLink
            to="/tshirt"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Tshirt
          </NavLink>
          <NavLink
            to="/bag"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-slate-800 font-medium" : ""
            }
          >
            Bag
          </NavLink>
        </div>
        <div className="w-full mt-4">
          <Outlet />
        </div>
      </section>
  )
}

export default NewArrival