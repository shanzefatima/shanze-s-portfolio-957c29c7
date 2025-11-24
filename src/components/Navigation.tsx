import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { label: "Work", href: "#work", type: "scroll" },
    { label: "Expertise", href: "#expertise", type: "scroll" },
    { label: "About", href: "/about", type: "link" },
    { label: "Contact", href: "#contact", type: "scroll" }
  ];

  const handleNavClick = (item: typeof navItems[0], e?: React.MouseEvent) => {
    if (item.type === "scroll") {
      if (e) e.preventDefault();
      // If not on homepage, navigate there first
      if (location.pathname !== "/") {
        window.location.href = "/" + item.href;
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-morphic shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link to="/">
            <motion.span
              className="text-base font-black tracking-tight cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Shanze Fatima Javed
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = item.type === "link" && location.pathname === item.href;
              
              const NavElement = item.type === "link" ? Link : "button";
              
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavElement
                    to={item.type === "link" ? item.href : undefined}
                    onClick={() => handleNavClick(item)}
                    className={`text-sm uppercase tracking-wider font-semibold hover:text-primary transition-colors relative group ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                      initial={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ originX: 0 }}
                    />
                  </NavElement>
                </motion.div>
              );
            })}
            
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-background z-40 md:hidden pt-24 px-6"
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item, index) => {
            const NavElement = item.type === "link" ? Link : "button";
            
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
              >
                <NavElement
                  to={item.type === "link" ? item.href : undefined}
                  onClick={() => handleNavClick(item)}
                  className="text-3xl font-bold text-left hover:text-primary transition-colors block"
                >
                  {item.label}
                </NavElement>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
