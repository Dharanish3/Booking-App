import React from 'react'
import './index.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function Dashboard() {
  
  return (
   <>
    <Topbar/>
    <Sidebar>
          <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-6 col-md-6">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">All Movies</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <Link className="small text-white stretched-link" to="/admin/movieslist">View List</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="card bg-info text-white mb-4">
                                    <div className="card-body">Add Movies</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <Link className="small text-white stretched-link" to="/admin/movie-create">Add</Link>
                                      
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
    </Sidebar>
   </>
  )
}

export default Dashboard