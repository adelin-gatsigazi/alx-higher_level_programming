# 1-install_a_package.pp

class { 'python':
  version => 'present',
}

package { 'python3-pip':
  ensure => 'installed',
}

package { 'Flask':
  ensure   => '2.1.0',
  provider => 'pip',
  require  => Package['python3-pip'],
}

