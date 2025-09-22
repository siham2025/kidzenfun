<?php
namespace App\Tests\Unit;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
public function testActivity()
    {
    
        $user= new User();
        $user
          ->setFirstName('Ilyes')
          ->setLastName('Vinchon')
          ->setEmail('ilyesvinchon@gmail.com')
          ->setPassword('$2y$13$Ub6zdzd3COrmNUMczfsIXeK/Hb4buIXHxR.t8qdAxGzvC1UjSRYlK')
          ->setPhone('0033785836877')
          ->setIsVerified(true)
          ->setRoles(['ROLE_USER']);

           $this->assertEquals('Ilyes', $user->getFirstName());
           $this->assertEquals('Vinchon', $user->getLastName());
           
           $this->assertEquals('ilyesvinchon@gmail.com', $user->getEmail());
           $this->assertEquals('$2y$13$Ub6zdzd3COrmNUMczfsIXeK/Hb4buIXHxR.t8qdAxGzvC1UjSRYlK', $user->getPassword());
           $this->assertEquals('0033785836877', $user->getPhone());
           $this->assertEquals(true, $user->isVerified());
           $this->assertEquals(['ROLE_USER'], $user->getRoles());
           
}
}