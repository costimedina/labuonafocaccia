function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                    <div className="footer-bottom"></div>
                    <p className="text-xs-center"></p> 
                    &copy;{new Date().getFullYear()} La Buona Focaccia | Todos los derechos reservados 
                </div>
            </div>
        </>
    );
};

export default Footer;