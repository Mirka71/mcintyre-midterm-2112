'use client';

// Question 3. Made all the Links in the nav

// import the react Link
import Link from "next/link";

// create function to export html
export default function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">COMP2112 Mid-Term</Link>
                    </li>

                    <li>
                        <Link href="/courses">Courses</Link>
                    </li>

                    <li>
                        <Link href="/student">Student Info</Link>
                    </li>

                    <li>
                        <Link href="auth/login">Log In</Link>
                    </li>

                </ul>
            </nav>
        </header>

    );
}