import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRole } from '../context/RoleContext';

export default function Home() {
  const router = useRouter();
  const { role, setRole } = useRole();

  useEffect(() => {
    if (!router.isReady) return; // Wait until the router is ready

    const { role: queryRole } = router.query;

    if (queryRole === 'student' || queryRole === 'teacher') {
      setRole(queryRole);
    } else {
      // Redirect or handle invalid role
      router.push('/'); // Redirect to home or show an error
    }
  }, [router.isReady, router.query]); // Include router.isReady and router.query in the dependencies

  return (
    <>
    {role === "teacher" ?
    <div className="bg-themepurple">
      <h1>Teacher Dashboard</h1>
    </div>
    : 
    <div className="bg-themepurple">
      <h1>Student Dashboard</h1>
    </div>
    }
    </>
    
  );
}
